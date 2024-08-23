import ACard from "@/components/atoms/card/card";
import CardAcademyProps from "./card_academy.interface";

const ACardAcademy = ({ ...props }: CardAcademyProps) => {
  return (
    <ACard color={"primary"} contentPosition={"center"}>
      {props.children}
    </ACard>
  );
};

export default ACardAcademy;
