import Swal from "sweetalert2";

const Comments = () => {
  const handleComment = (e) => {
    e.preventDefault();
    const form = e.target;
  
    const name = form.name.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
  
    const newComment = {
      name,
      email,
      feedback
    };
  
    fetch("http://localhost:5000/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Feedback Added Successfully",
            icon: "success",
            confirmButtonText: "Thank You",
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, show error message, etc.
      });
  };
  



  return (
    <div>
      <div className="card shrink-0 w-3/6 pl-12  shadow-2xl bg-transparent text-end">
            <form onSubmit={handleComment} className="card-body text-center">
              <div className="form-control text-center">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write About The Spot</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Feedback"
                  name="feedback"
                  className="input input-bordered w-96 h-48"
                  required
                />
              </div>
              
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Comment it!</button>
              </div>
            </form>
          </div>
    </div>
  );
};

export default Comments;
