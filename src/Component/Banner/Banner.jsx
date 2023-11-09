import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className="hero my-7 min-h-screen bg-base-200 w-[90%] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img className='w-[40%] rounded' src={banner} />
          <div>
            <h1 className="text-5xl  font-bold">Step into the Cricket Universe:</h1>
            <p className="py-6">Your Gateway to Live Scores! Immerse yourself in the thrill of every match with real-time updates, statistics, and highlights. Your go-to destination for all things cricket – where every run, wicket, and boundary comes to life!</p> 
          </div>
        </div>
      </div>
    );
};

export default Banner;