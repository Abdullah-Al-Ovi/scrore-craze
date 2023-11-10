

const Match = () => {
    return (
        <div className="w-[40%] rounded-md my-7 h-[50vh] flex flex-col justify-center items-center mx-auto bg-gradient-to-r space-y-2 from-cyan-200 to-blue-500 text-center">
           <div className="h-[30%] text-white font-medium bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center w-[50%] border-2"><a target="_blank" href="/viewScore "><button className="w-full hover:text-lg">View Score</button></a></div>
           <div className="h-[30%] text-white font-medium bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center w-[50%] border-2"><a href="/arrangeMatch"><button className="w-full hover:text-lg">Arrange Match</button></a></div> 
        </div>
    );
};

export default Match;