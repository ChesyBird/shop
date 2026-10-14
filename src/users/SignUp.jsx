import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 회원 가입 폼 컴포넌트 정의
const SignUp = () => {

    // 폼 데이터 상태관리
    const [formData, setFormData] = useState({
        id: "",
        password: "",
        name: "", // 이름
        job: "회사원", // 직업
        gender: "male", // 성별
        memo: "" // 자기소개
    })

    const navigate = useNavigate();

    // 모든 필드 입력값 변경 함수
    const handleInputChange = (e) => {
        const {name, value} = e.target; // e.target.value, e.target.name  구조분해할당

        setFormData({...formData, [name]: value});
    }

    // 폼 제출 처리 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본동작 막기
        console.log("제출 데이터 : ", formData);

        // 입력값 검증
        if(!formData.id.trim() || !formData.password.trim() ||
            !formData.name.trim() || !formData.job.trim() || !formData.gender.trim()){
            alert("모든 필드를 입력하세요.");
            return;
        }
        
        alert("회원가입이 등록되었습니다.")
        navigate("/signin"); // 회원가입 후 로그인 페이지
    }

    const handleCancel = () => {
        setFormData({
        id: "",
        password: "",
        name: "",
        job: "회사원",
        gender: "male",
        memo: ""
        })
    }

    return (
        <div className="sign-up">
            <h2>회원 가입</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>아이디</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleInputChange}
                        placeholder="아이디를 입력하세요"
                    />
                </div>
                <div>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="비밀번호를 입력하세요"
                    />
                </div>
                <div>
                    <label>이름</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="이름을 입력하세요"
                    />
                </div>
                <div>
                    <label>직업</label>
                    <select
                        name="job"
                        value={formData.job}
                        onChange={handleInputChange}
                    >
                        <option value="employee">회사원</option>
                        <option value="student">학생</option>
                        <option value="freelancer">프리랜서</option>
                    </select>
                </div>
                <div>
                    <label className="gender-title">성별</label>
                    <div className="gender-option">
                        <label><input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === "male"}
                            onChange={handleInputChange}
                        /> 남자</label>
                        <label><input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === "female"}
                            onChange={handleInputChange}
                        /> 여자</label>
                    </div>
                </div>
                <div>
                    <label>자기소개</label>
                    <textarea
                        name="memo"
                        rows={5}
                        cols={20}
                        value={formData.memo}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div>
                    {/* 서버에 전송이 되는 부분 : submit 사용 */}
                    <button type="submit">가입</button>
                    <button type="button" onClick={handleCancel}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;