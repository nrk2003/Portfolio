import type { Grade } from '@/types/project';

export function GradeCard({ grade }: { grade: Grade }) {
  return (
    <div className="gradecard">
      <div className="gbox">
        <b>{grade.grade}</b>
        <span>{grade.label || 'MY TAKE'}</span>
      </div>
      <div>
        <h2>{grade.title}</h2>
        <p>{grade.body}</p>
        <div className="tactics">
          {grade.tactics.map((t) => (
            <span key={t.label} className={`tactic${t.hot ? ' hot' : ''}`}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
