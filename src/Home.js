import image from './img/profile.jpg'
const Home = () => {

    return ( 
        <div className="Home">
            <h1>Shop Today</h1>
            <div className="parentGrid">
                <img src={image} alt="profile" />
                <div className="cart-btn">
                    <button className="add"> + </button>
                    <button className="remove"> - </button>
                </div>
            </div>
        </div>
        );
}
 
export default Home;