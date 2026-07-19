import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLoginMain = () => {
  return (
    <div className="admin-login-wrap">
      <div className="card bg-white border rounded-10 border-white py-5 px-4 px-md-5">
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default AdminLoginMain;
