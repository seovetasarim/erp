import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLoginMain = () => {
  return (
    <main className="admin-login-area tp-login-area p-relative z-index-1 fix">
        <div className="container container-1230">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <AdminLoginForm />
            </div>
          </div>
        </div>
      </main>
  );
};

export default AdminLoginMain;
