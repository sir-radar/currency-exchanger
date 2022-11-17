import styled from "styled-components";
import Input from "../Input/Input";
import Label from "../Label/Label";

interface ExchangerProps {
  title: string;
}

const Exchanger = ({title}: ExchangerProps) => {

  return (
    <ExchangerWrapper>
      <h2>{title}</h2>
      <Content>
        <SectionA>
          <Input label="Amount" onChange={() => null} />
          <Label text="1.00 EUR = XXX USD" size="medium"/>
        </SectionA>

        <SectionB>
          <Input label="Amount" onChange={() => null} />
          <Label text="1.00 EUR = XXX USD" size="medium"/>
        </SectionB>

      </Content>

    </ExchangerWrapper>
  )
}

export default Exchanger

const ExchangerWrapper = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  padding: 8px;
`;

const SectionA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const SectionB = styled.div`
  display: flex;
  flex-direction: column;
`;
