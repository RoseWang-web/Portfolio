import { useState } from "react";

export const ContactSection = () => {
    // 狀態 1: 追蹤表單資料 (姓名, 電子郵件)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    // 狀態 2: 追蹤錯誤訊息
    const [errors, setErrors] = useState({});

    // 狀態 3: 追蹤提交結果 (成功或失敗)
    const [submissionStatus, setSubmissionStatus] = useState("");

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

        setErrors(newErrors);
        return isValid;
    };

    // 處理表單提交
    const handleSubmit = (e) => {
        e.preventDefault(); // 防止瀏覽器預設的表單提交行為

        if (validate()) {
            // 表單驗證成功
            setSubmissionStatus("Thank you for your message! I will be in touch soon.");
            console.log("Form submitted successfully:", formData);

            // 清空表單 (可選)
            setFormData({ name: "", email: "" });
            setErrors({});

            // 這裡可以加入實際的 API 提交邏輯
        } else {
            // 表單驗證失敗
            setSubmissionStatus(""); // 清除成功訊息
            console.log("Form submission failed due to validation errors.");
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

                    {/* 提交按鈕 */}
                    <button type="submit" className="cosmic-button w-full">
                        Send Message
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