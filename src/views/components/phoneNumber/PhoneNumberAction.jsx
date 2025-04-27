import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, Badge } from "reactstrap";
import { FaUser, FaPhone, FaSms, FaCopy, FaComments, FaShareAlt } from "react-icons/fa";

const PhoneAction = () => {
    const location = useLocation();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [showCopyToast, setShowCopyToast] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        setName(decodeURIComponent(params.get("name") || ""));
        setPhone(params.get("phone") || "");
    }, [location.search]);

    const sendSMS = () => window.location.href = `sms:${phone}`;
    const callPhone = () => window.location.href = `tel:${phone}`;
    const addKakaoFriend = () => window.open(`https://qr.kakao.com/talk/g.rpG6i0CXxiQTeGd0SouVBuH44-`, "_blank");
    const sendWhatsApp = () => window.open(`https://wa.me/${phone.replace(/[^0-9]/g, "")}`, "_blank");

    const copyPhoneNumber = async () => {
        try {
            await navigator.clipboard.writeText(phone);
            setShowCopyToast(true);
            setTimeout(() => setShowCopyToast(false), 2000);
        } catch (error) {
            alert("복사 실패");
        }
    };

    const sharePage = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${name}님 연락처`,
                    text: `${name}님의 전화번호: ${phone}`,
                    url: window.location.href,
                });
            } catch (error) {
                alert("공유 실패");
            }
        } else {
            alert("공유 기능을 지원하지 않는 브라우저입니다.");
        }
    };

    const formatPhoneNumber = (number) => {
        const cleaned = number.replace(/\D/g, "");
        if (cleaned.length === 11) return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
        if (cleaned.length === 10) return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
        return number;
    };

    if (!phone) {
        return (
            <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-center">
                <h1 className="text-danger fw-bold mb-3">잘못된 접근입니다</h1>
                <p className="text-muted">전화번호가 필요합니다.</p>
            </Container>
        );
    }

    return (
        <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-gradient-custom ">
            {showCopyToast && (
                <div className="toast-message">
                    <FaCopy className="me-2" /> 전화번호 복사 완료!
                </div>
            )}
            <Card className="contact-card p-4 mt-5">
                <div className="profile-icon mx-auto mb-4">
                    <FaUser />
                </div>
                <CardBody>
                    <CardTitle tag="h2" className="text-center fw-bold">
                        <Badge color="primary" className="ms-2">연락처</Badge><br/>
                        <strong>{name}</strong>
                    </CardTitle>
                    <CardText className="text-center text-muted fs-5">
                        {formatPhoneNumber(phone)}
                    </CardText>

                    <div className="d-flex flex-column align-items-center gap-3 mt-4">
                        <Button color="primary" size="lg" className="w-100 button-custom" onClick={callPhone}>
                            <FaPhone className="me-2" /> 전화 걸기
                        </Button>
                        <Button color="info" size="lg" className="w-100 button-custom  mt-2" onClick={sendSMS}>
                            <FaSms className="me-2" /> 문자 보내기
                        </Button>
                        {name === "김지섭" && phone === "01056785940" && (
                            <Button color="warning" size="lg" className="w-100 button-custom mt-2" onClick={addKakaoFriend} style={{ color: "#3C1E1E" }}>
                                <FaComments className="me-2" /> 카카오톡
                            </Button>
                        )}
                        <Button color="secondary" size="lg" className="w-100 button-custom mt-2" onClick={copyPhoneNumber}>
                            <FaCopy className="me-2" /> 번호 복사
                        </Button>
                        <Button color="dark" size="lg" className="w-100 button-custom mt-2" onClick={sharePage}>
                            <FaShareAlt className="me-2" /> 공유하기
                        </Button>
                    </div>

                </CardBody>
            </Card>



            {/* 스타일 */}
            <style>{`
        .bg-gradient-custom {
          background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
          background-attachment: fixed;
        }
        .contact-card {
          width: 100%;
          max-width: 400px;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 0.5s ease-out;
          background: white;
        }
        .profile-icon {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(45deg, #6a11cb, #2575fc);
          color: white;
          font-size: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          animation: fadeInDown 0.5s ease-out;
        }
        .toast-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(33, 37, 41, 0.85);
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          z-index: 9999;
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 576px) {
          .profile-icon {
            width: 80px;
            height: 80px;
            font-size: 2.5rem;
          }
          .contact-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
        </Container>
    );
};

export default PhoneAction;
