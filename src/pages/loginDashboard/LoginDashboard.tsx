import FormLogin from "./FormLogin";

const LoginDashboard = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://gocement.com/blog/wp-content/uploads/2023/11/photo-1585747860715-2ba37e788b70.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <FormLogin />
    </div>
  );
};

export default LoginDashboard;
