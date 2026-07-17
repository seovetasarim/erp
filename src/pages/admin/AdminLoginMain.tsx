import AdminLoginForm from "@/components/admin/AdminLoginForm";

const AdminLoginMain = () => {
  return (
    <section className="admin-login-area tp-login-area pt-180 pb-140 p-relative z-index-1 fix">
      <div className="container container-1230">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLoginMain;
