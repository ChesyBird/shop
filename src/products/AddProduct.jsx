import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    // 폼 전체 데이터(객체) 상태관리
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: ""
    });

    // 페이지 이동 훅
    const navigate = useNavigate();

    // 입력값 변경 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // 입력값 상태 업데이트
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // 폼 제출 처리 함수
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("상품 추가: ", formData);

        // 입력값 검증(유효성 검사)
        if(!formData.name.trim() || !formData.price || !formData.description.trim()){
            alert("모든 필드를 입력하세요");
            return; // 즉시 종료
        }

        // 가격필드 검증
        if(isNaN(formData.price) || formData.price < 0) {
            alert("가격은 0보다 큰 숫자를 입력하세요.")
            return;
        }

        alert("상품이 등록되었습니다.");
        navigate("/products"); // 상품 등록 후 목록페이지로 이동
        
    } //handleSubmit() 닫기

    const handleCancel = () => {
        // 입력필드 초기화
        setFormData({
            name: "",
            price: "",
            description: ""
        })
    }

    return (
        <div className="add-product">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="상품명을 입력해주세요."
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="가격을 입력해주세요."
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea
                        name="description"
                        id="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="상품 설명을 입력해주세요."
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                    <button type="button" onClick={handleCancel}>취소</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;