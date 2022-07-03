// css
import "./companyDetail.css";

export function CompanyDetail(props) {
  const { id, company, dates, duties, title } = props[0];

  return (
    <section key={id + "-section"} className="company-detail">
      <h2 className="title">{title}</h2>
      <p className="company">{company}</p>
      <p className="date">{dates}</p>
      <div className="duties">
        {duties.map((duty, index) => (
          <p key={`${index}-${duty}`}>{duty}</p>
        ))}
      </div>
    </section>
  );
}
