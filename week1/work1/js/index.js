const App = () => {
  const [tempProduct, setTempProduct] = React.useState(null);
  const [products, setProducts] = React.useState(data);
  const selectProductImg = (img) => {
    let data = Object.assign({}, tempProduct, { imageUrl: img });
    setTempProduct(data);
  };

  return (
    <div className="container">
      <div className="main">
        {tempProduct ? (
          <div>
            <div className="product-detail-section">
              <div className="product-detail-header">
                <h2>商品詳情</h2>
                {tempProduct ? (
                  <button className="reset-button" onClick={() => setTempProduct(null)}>
                    返回列表
                  </button>
                ) : null}
              </div>
              <hr />
              <div>
                <div className="product-info">
                  <div className="product-info-image">
                    <img src={tempProduct.imageUrl} alt="主圖片" />
                  </div>
                  <div className="product-info-content">
                    <h3 className="product-title">{tempProduct.title}</h3>
                    <p className="product-description">{tempProduct.description}</p>
                    <hr />
                    <div className="product-params-content">
                      <p className="product-params">商品類型：{tempProduct.category}</p>
                      <p className="product-params">商品尺寸：{tempProduct.content}</p>
                      <p className="product-params">
                        庫存數量：{tempProduct.num} {tempProduct.unit}
                      </p>
                      <p className="product-params">販售狀態：{tempProduct.is_enabled ? "販售中" : "已下架"}</p>
                    </div>
                    <div className="product-price">
                      <span className="origin-price">
                        原價：<del>{tempProduct.origin_price}元</del>
                      </span>
                      <span className="selling-price">售價：{tempProduct.price}元</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="image-gallery-header">
                    <span className="image-gallery-title">更多圖片</span>
                    <span className="image-gallery-text">可點選放大圖片</span>
                  </div>

                  <div className="image-gallery">
                    {tempProduct.imagesUrl.map((img, index) => (
                      <img src={img} alt={`圖片 ${index + 1}`} key={index} onClick={() => selectProductImg(img)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="product-section">
              <h2>商品列表</h2>
              <table className="product-table">
                <thead>
                  <tr>
                    <th>名稱</th>
                    <th>原價</th>
                    <th>售價</th>
                    <th>庫存</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.origin_price}元</td>
                      <td>{item.price}元</td>
                      <td>
                        {item.num}
                        {item.unit}
                      </td>
                      <td>
                        <button className="view-button" onClick={() => setTempProduct(item)}>
                          查看商品
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
