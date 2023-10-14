import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        const statusStyles = {
          backgroundColor: isOnline ? '#97e605' : '#f9bf04',
        };
        return (
          <li key={id} className={css.item}>
            <span style={statusStyles} className={css.status}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
