const ProfileNotification = () => {
  return (
    <div className="profile__notification">
      <div className="profile__notification-top mb-30">
        <h3 className="profile__notification-title">Bildirim Tercihleri</h3>
        <p>
          Sizi ilgilendiren etkinlikler hakkında bildirim alın: lisans
          güncellemeleri, destek yanıtları, yeni sürümler, kampanyalar ve
          yönetimsel duyurular.
        </p>
      </div>
      <div className="profile__notification-wrapper">
        <div className="profile__notification-item mb-20">
          <div className="form-check form-switch d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="like"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="like">
              Lisans ve hesap bildirimleri
            </label>
          </div>
        </div>
        <div className="profile__notification-item mb-20">
          <div className="form-check form-switch d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="post"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="post">
              Destek talebi yanıtları
            </label>
          </div>
        </div>
        <div className="profile__notification-item mb-20">
          <div className="form-check form-switch d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="new"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="new">
              Yeni sürüm bildirimleri
            </label>
          </div>
        </div>
        <div className="profile__notification-item mb-20">
          <div className="form-check form-switch d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="sale"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="sale">
              Kampanya ve indirim bildirimleri
            </label>
          </div>
        </div>
        <div className="profile__notification-item mb-20">
          <div className="form-check form-switch d-flex align-items-center">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="payment"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="payment">
              Ödeme ve fatura bildirimleri
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNotification;
