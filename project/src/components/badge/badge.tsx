type BadgeProps={
  className: string;
}

function Badge({className}: BadgeProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default Badge;
