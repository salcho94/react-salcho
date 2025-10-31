// ContactForm.jsx
import React, { useState } from "react";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert,
    Spinner,
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovpnoyz";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        if (!form.email || !form.message) {
            setErrorMsg("이메일과 메시지는 필수 항목입니다.");
            setStatus("error");
            return;
        }

        try {
            setStatus("sending");
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
                const msg =
                    data?.errors?.map((err) => err?.message).join(", ") ||
                    data?.error ||
                    "전송 실패";
                setErrorMsg(msg);
            }
        } catch (err) {
            setStatus("error");
            setErrorMsg("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <Card
            className="border-0 shadow-lg"
            style={{
                maxWidth: "700px",
                margin: "60px auto",
                borderRadius: "20px",
                background: "linear-gradient(135deg, #ffffff 0%, #f9fafc 100%)",
            }}
        >
            <CardBody className="p-5">
                <CardTitle
                    tag="h3"
                    className="mb-4 text-center fw-bold"
                    style={{
                        color: "green",
                        letterSpacing: "-0.5px",
                        fontWeight: 700,
                    }}
                >
                    문의하기 📬
                </CardTitle>

                {status === "success" && (
                    <Alert color="success" fade>
                        ✅ 메일이 성공적으로 전송되었습니다! 감사합니다.
                    </Alert>
                )}
                {status === "error" && (
                    <Alert color="danger" fade>
                        ⚠️ 전송 실패: {errorMsg}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <FormGroup className="mb-4">
                        <Label
                            for="name"
                            className="fw-semibold text-secondary small text-uppercase"
                        >
                            이름 (선택)
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="홍길동"
                            value={form.name}
                            onChange={handleChange}
                            bsSize="lg"
                            style={{
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                boxShadow: "none",
                                transition: "all 0.2s ease",
                            }}
                            onFocus={(e) =>
                                (e.target.style.border = "1px solid #0d6efd")
                            }
                            onBlur={(e) =>
                                (e.target.style.border = "1px solid #e5e7eb")
                            }
                        />
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <Label
                            for="email"
                            className="fw-semibold text-secondary small text-uppercase"
                        >
                            이메일 *
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            bsSize="lg"
                            style={{
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                transition: "all 0.2s ease",
                            }}
                            onFocus={(e) =>
                                (e.target.style.border = "1px solid #0d6efd")
                            }
                            onBlur={(e) =>
                                (e.target.style.border = "1px solid #e5e7eb")
                            }
                        />
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <Label
                            for="message"
                            className="fw-semibold text-secondary small text-uppercase"
                        >
                            메시지 *
                        </Label>
                        <Input
                            id="message"
                            name="message"
                            type="textarea"
                            rows="6"
                            placeholder="문의 내용을 입력하세요."
                            value={form.message}
                            onChange={handleChange}
                            required
                            bsSize="lg"
                            style={{
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                resize: "vertical",
                                transition: "all 0.2s ease",
                            }}
                            onFocus={(e) =>
                                (e.target.style.border = "1px solid #0d6efd")
                            }
                            onBlur={(e) =>
                                (e.target.style.border = "1px solid #e5e7eb")
                            }
                        />
                    </FormGroup>

                    <div className="d-flex justify-content-center">
                        <Button
                            color="primary"
                            type="submit"
                            disabled={status === "sending"}
                            size="lg"
                            className="px-5 py-2 fw-semibold"
                            style={{
                                borderRadius: "12px",
                                background:
                                    "linear-gradient(135deg, #0d6efd 0%, #007bff 100%)",
                                boxShadow: "0 4px 12px rgba(13, 110, 253, 0.3)",
                                transition: "all 0.2s ease-in-out",
                            }}
                            onMouseEnter={(e) =>
                                (e.target.style.boxShadow =
                                    "0 6px 16px rgba(13, 110, 253, 0.45)")
                            }
                            onMouseLeave={(e) =>
                                (e.target.style.boxShadow =
                                    "0 4px 12px rgba(13, 110, 253, 0.3)")
                            }
                        >
                            {status === "sending" ? (
                                <>
                                    <Spinner size="sm" color="light" /> 전송중...
                                </>
                            ) : (
                                "보내기"
                            )}
                        </Button>
                    </div>
                </Form>
            </CardBody>
        </Card>
    );
}
