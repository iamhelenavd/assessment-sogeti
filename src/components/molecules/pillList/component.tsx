import ListItem from "../../atoms/listItem/component";

type ActorListProps = {
  items: Array<string>;
  title?: string;
  isGhost?: boolean;
};

function PillList(props: ActorListProps) {
  const { title, items, isGhost = false } = props;

  return (
    <>
      {title && <h4>{title}</h4>}
      <ul>
        {items.map((item, index) => (
          <ListItem isGhost={isGhost} key={index} text={item} />
        ))}
      </ul>
    </>
  );
}

export default PillList;
