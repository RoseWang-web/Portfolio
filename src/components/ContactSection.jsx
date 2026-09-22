import { useRef, useState } from "react";

// Web3Forms 端點：表單資料以 JSON POST 到這裡，由 Web3Forms 轉寄到你的信箱
// access_key 是「公開金鑰」，設計上就是要放在前端程式碼裡，不是機密資訊
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export const ContactSection = () => {
    // 狀態 1: 追蹤表單資料 (姓名, 電子郵件, 訊息)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // 狀態 2: 追蹤錯誤訊息
    const [errors, setErrors] = useState({});

    // 狀態 3: 追蹤提交結果 (成功或失敗)
    const [submissionStatus, setSubmissionStatus] = useState("");

    // 狀態 4: 追蹤是否正在送出，避免使用者重複點擊
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 防機器人的蜜罐欄位，一般使用者看不到也不會填寫；若被填寫就當作垃圾訊息丟棄
    const honeypotRef = useRef(null);

    // 處理輸入變更
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // 當使用者輸入時，清除特定欄位的錯誤
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    // 執行輸入驗證
    const validate = () => {
        const newErrors = {};
        let isValid = true;

        // 驗證姓名
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
            isValid = false;
        }

        // 驗證電子郵件
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            // 使用正則表達式 (Regex) 檢查基礎電子郵件格式
            newErrors.email = "Email address is invalid.";
            isValid = false;
        }

        // 驗證訊息內容
        if (!formData.message.trim()) {
            newErrors.message = "Message is required.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // 處理表單提交
    const handleSubmit = async (e) => {
        e.preventDefault(); // 防止瀏覽器預設的表單提交行為

        if (!validate()) {
            // 表單驗證失敗
            setSubmissionStatus(""); // 清除成功訊息
            console.log("Form submission failed due to validation errors.");
            return;
        }

        // 蜜罐欄位被填寫 -> 視為機器人，假裝成功但不真的送出
        if (honeypotRef.current?.checked) {
            setSubmissionStatus("Thank you for your message! I will be in touch soon.");
            setFormData({ name: "", email: "", message: "" });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: "New message from portfolio contact form",
                    ...formData,
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmissionStatus("Thank you for your message! I will be in touch soon.");
                setFormData({ name: "", email: "", message: "" });
                setErrors({});
            } else {
                console.error("Web3Forms submission failed:", result);
                setSubmissionStatus("Something went wrong sending your message. Please try again or email me directly.");
            }
        } catch (error) {
            console.error("Network error while submitting contact form:", error);
            setSubmissionStatus("Something went wrong sending your message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // 使用 Tailwind 類別來呈現表單和錯誤訊息
    return (
        <section id="contact" className="py-24 px-4 relative bg-card">
            <div className="container mx-auto max-w-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get in <span className="text-primary"> Touch</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg shadow-xl bg-background border border-border">

                    {/* 蜜罐欄位：一般訪客看不到，機器人常常會自動填寫所有欄位 */}
                    <input
                        type="checkbox"
                        name="botcheck"
                        ref={honeypotRef}
                        className="hidden"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    {/* 姓名輸入欄位 */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-foreground bg-card focus:ring-2 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-border'}`}
                            placeholder="Interstellar Alliance Name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* 電子郵件輸入欄位 */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-foreground bg-card focus:ring-2 focus:ring-primary focus:border-primary ${errors.email ? 'border-red-500' : 'border-border'}`}
                            placeholder="your-ship@galaxy.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* 訊息輸入欄位 */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-md border text-foreground bg-card focus:ring-2 focus:ring-primary focus:border-primary resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                            placeholder="What would you like to talk about?"
                        />
                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>

                    {/* 提交按鈕 */}
                    <button type="submit" disabled={isSubmitting} className="cosmic-button w-full disabled:opacity-60 disabled:cursor-not-allowed">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {/* 提交狀態訊息 */}
                    {submissionStatus && (
                        <p className={`mt-4 text-center text-sm font-medium ${submissionStatus.includes("Thank you") ? 'text-green-500' : 'text-red-500'}`}>
                            {submissionStatus}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};
