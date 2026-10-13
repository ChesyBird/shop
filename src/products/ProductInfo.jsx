import { useNavigate, useParams } from "react-router-dom";
import products from "../datas/products";

const ProductInfo = () => {
    // url의 경로를 추출
    const {id} = useParams();

    // 페이지 이동
    const navigate = useNavigate();

    // id에 해당하는 상품을 가져오기
    // id는 문자이므로, 숫자형으로 변환 : Number(), ParseInt() 사용
    const product = products.find(p => p.id === Number(id));

    return (
        <div className="product-info">
            <h2>상품 정보</h2>
            {/* <h3>상품 ID: {id}</h3> */}
            <div className="detail">
                <p>상품 이름 : {product.name}</p>
                <p>상품 가격 : {product.price}</p>
                <p>상품 설명 : {product.description}</p>
            </div>
            <div>
                <button onClick={() => {navigate('/products')}}>목록 보기</button>
            </div>
        </div>
    )
}

export default ProductInfo;