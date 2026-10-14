import { useState } from "react";
import users from "../datas/users";
import { Link, useNavigate } from "react-router-dom";


const SignIn = ({onLogin}) => {

    const [formData, setFormData] = useState({
        username: "", // id
        password: ""  // pw
    })

    // 페이지 이동 훅 : useNavigate()
    const navigate = useNavigate();

    //로그인 결과 상태 관리
    // 객체 초기화 : null
    const [result, setResult] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출 데이터: ", formData);

        // 로그인 결과처리
        const {username, password} = formData;

        // 데이터 일치 여부 : find()
        const matched = users.find((user) => 
            user.username === username && user.password === password);

        // setResult(matched ? "success" : "fail");

        // 입력값 초기화
        setFormData({username: "", password: ""});

        // 메인페이지 이동
        if(matched) {
            setResult("success")
            onLogin(username);
            navigate("/");
        } else {
            setResult("fail")
        }
    }

    return (
        <div className="sign-in">
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="아이디를 입력해주세요"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">로그인</button>
                </div>
            </form>
            {/* 회원가입 링크 */}
            <p className="signup-link">
                아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </p>

            {/* 결과메세지 출력 */}
            {result === "fail" &&
                (<p style={{color: "red"}}>아이디 또는 비밀번호를 확인해주세요.</p>)}
        </div>
    )
}

export default SignIn;