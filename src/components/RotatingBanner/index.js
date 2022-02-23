import React from "react";

import { Paragraph } from "./styles";

const text =
  "Gestão de Produtos - Estratégia - Go To Market - Discovery - Liderança - Transição de Carreira - Tendências";

function RotatingBanner() {
  return (
    <Paragraph>
      <span>{text}</span>
    </Paragraph>
  );
}

export default RotatingBanner;
