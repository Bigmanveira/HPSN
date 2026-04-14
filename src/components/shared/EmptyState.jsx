import { Inbox } from 'lucide-react';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'Nothing here yet',
  description = 'Check back soon for updates.',
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Icon size={48} />
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}
