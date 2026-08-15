"use client";

import { useState } from "react";
import { faqItems } from "@/data/faqData";

const mid = Math.ceil(faqItems.length / 2);
const columns = [faqItems.slice(0, mid), faqItems.slice(mid)];

const ITSolutionFaqList = () => {
  const [openId, setOpenId] = useState(faqItems[0]?.id ?? "");

  return (
    <section className="erp-faq-section">
      <div className="container container-1230">
        <div className="erp-section-heading">
          <h2>
            Sık <span>Sorulan Sorular</span>
          </h2>
        </div>

        <div className="row g-4">
          {columns.map((items, col) => (
            <div key={col} className="col-lg-6">
              {items.map((item) => {
                const open = openId === item.id;
                return (
                  <article
                    key={item.id}
                    className={`erp-faq-item${open ? " is-open" : ""}`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenId(open ? "" : item.id)}
                      >
                        {item.question}
                      </button>
                    </h3>
                    {open ? (
                      <div className="erp-faq-item__body">
                        <p>{item.answer}</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSolutionFaqList;
