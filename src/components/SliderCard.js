const SliderCard = ({ flagType, imgSrc }) => {
  return (
    <div className="trendingProductCard">
      {flagType === "red" && <div className="ribbon1">Topseller</div>}
      {flagType === "blue" && <div className="ribbon2">1 Sets left!</div>}
      <img className="fav" src="/images/fav.jpg" alt="" />
      <img className="productImage mt-4" src={imgSrc} alt="" />
      <h6>
        Wall-mounted bidet <br /> Standard
      </h6>
      <p>Delivery time: approx. 4-3 weeks</p>
      <div className="productPrice">
        <span>€679.18</span>
        <span>€923.44*</span>
        <span>(-10%)</span>
      </div>
      <div className="productRating">
        <div>
          <img src="/images/rating.jpg" alt="" />
          <span>4.6</span>
        </div>
        <img className="bag" src="/images/shoping-bag.jpg" alt="" />
      </div>
    </div>
  );
};

export default SliderCard;
