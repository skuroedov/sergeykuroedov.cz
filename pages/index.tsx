import React from "react";
import {Section} from "@components/Section";
import {Block, BlockTitle} from "@components/Block";
import {Title} from "@components/Title";
import {Button} from "@components/Button";


const Home: React.FC = () => {
  return (
    <>
      <Section className="text-5xl">
        <div className="border-l-2 px-5 anim">
          <p>Sergey</p>
          <p>Kuroedov</p>
        </div>
      </Section>
      <Section>
        <Title>Základní informace</Title>
        <Block>
          <p>
            kuroedov@uzlabina.cz
          </p>
          <p>
            Kabinet 306
          </p>
          <p>
            Konzultační hodiny: středa 7:00 - 7:45
          </p>
        </Block>
      </Section>
      <Section>
        <Title>Materiály</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Block>
            <BlockTitle>HS 3. ročník</BlockTitle>
            <p>
              Materiály k výuce 3. ročníku předmětu HS.
            </p>
            <Button href="https://spsevuzlabine-my.sharepoint.com/:f:/g/personal/kuroedov_uzlabina_cz/EqwJ-sOppotApNW8rbK2qL8BOD-2jgs_NxP4BWsjbvNMTA?e=Ssih0X">
              Odkaz
            </Button>
          </Block>
          <Block>
            <BlockTitle>HS 2. ročník</BlockTitle>
            <p>
              Powerpointové prezentace k výuce 2. ročníku předmětu HS.
            </p>
            <Button href="https://spsevuzlabine-my.sharepoint.com/:f:/g/personal/kuroedov_uzlabina_cz/Ev7Xr33JOFtBtrYHFlIJXtUBoU1KqoyfAbfXFIAnYAHmnQ?e=YByyRJ">
              Odkaz
            </Button>
          </Block>
        </div>
      </Section>
    </>
  );
};

export default Home;
