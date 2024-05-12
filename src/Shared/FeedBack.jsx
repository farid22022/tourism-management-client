import 'animate.css';
const FeedBack = ({ feedBack }) => {
  return (
    <div className="border border-gray-300 p-2 animate__animated animate__fadeInLeft">
      <div className="card card-compact  bg-base-100 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title inline-block text-2xl font-bold font-serif text-blue-950">Email : <span className="text-yellow-950">{feedBack.email}</span></h2>
          <p className="text-xl font-extrabold text-cyan-600}">Comment : <span className="text-green-950">{feedBack.feedBack}</span></p>
          
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
