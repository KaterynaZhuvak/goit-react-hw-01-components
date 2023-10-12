import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id}>
              <span className="label">{label}</span>
              <span className="quantity">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
