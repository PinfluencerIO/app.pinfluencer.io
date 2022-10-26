import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const HomePage = ({ isAuthenticated, isOnboarded }) => {
  const nav = useNavigate();
  return (
    <Stack rowGap={2}>
      <Typography variant="body1">
        This will be the home page with details about what&apos;s going on with
        Pinfluencer App 👋
      </Typography>
      <Typography>
        Veniam ut reprehenderit sunt ea mollit ipsum reprehenderit excepteur. Ea
        reprehenderit qui reprehenderit reprehenderit amet in ullamco nisi sunt
        pariatur. Labore dolore ea enim quis labore culpa Lorem laborum
        adipisicing fugiat deserunt commodo. Consectetur enim ut qui fugiat
        laboris velit. Sint consequat esse culpa reprehenderit proident deserunt
        aute ea nisi tempor aute. In anim Lorem incididunt mollit officia
        deserunt non aliquip esse exercitation commodo elit fugiat laborum.
        Commodo culpa aute enim dolore mollit. Dolore duis esse ex incididunt
        consequat enim ut aliqua duis duis cillum deserunt. Occaecat esse duis
        occaecat aliqua. Anim nostrud velit excepteur ipsum qui veniam occaecat
        exercitation commodo. Qui nostrud deserunt non esse. Incididunt non
        minim voluptate quis elit ea. Veniam nulla sunt id incididunt do.Ut
        occaecat ullamco ipsum cillum est Lorem eu ipsum ea ut ea ut duis magna.
        Incididunt adipisicing aliqua est tempor proident. Aliqua esse deserunt
        ullamco consectetur labore et exercitation laborum ex eu. Sunt aute
        culpa nisi minim velit mollit. Ipsum tempor eu occaecat proident minim
        officia do non pariatur.Incididunt culpa eu aute ex. Velit laboris culpa
        voluptate ad voluptate. Dolore officia amet aliquip sit ullamco ullamco
        tempor cupidatat tempor in. Quis eu fugiat dolor culpa ex ullamco
        proident sint irure tempor sint anim aliquip. Mollit qui consectetur
        labore mollit labore enim commodo sunt id deserunt labore veniam. Qui
        commodo voluptate ad occaecat irure adipisicing qui voluptate tempor. In
        ipsum dolor id magna enim mollit consectetur quis labore excepteur
        proident nulla Lorem in.Est exercitation aliqua ad tempor aute labore.
        Labore voluptate labore non occaecat proident elit fugiat aute enim est
        ex exercitation voluptate nostrud. Est dolor aliqua quis ullamco est.
        Voluptate duis eu sunt aliquip culpa elit. Cupidatat ex irure commodo
        magna ut cillum consequat excepteur dolore magna esse nulla irure
        ut.Veniam mollit duis magna ut cillum do proident irure voluptate
        tempor. Veniam exercitation in anim anim qui dolore quis. Cupidatat nisi
        sunt commodo sunt enim id. Veniam ullamco magna magna commodo culpa.
        Pariatur magna in et eiusmod veniam enim sint culpa. Exercitation sunt
        velit tempor enim.Consectetur fugiat magna enim amet magna labore
        ullamco et eiusmod et sint est reprehenderit irure. Elit culpa
        exercitation deserunt quis do mollit dolore cupidatat amet do in. Velit
        ut consequat voluptate ad. Sint mollit ex esse exercitation laborum
        irure adipisicing deserunt do voluptate.Ex magna mollit nulla deserunt
        commodo consequat commodo Lorem veniam dolor. Dolor elit qui est irure
        nostrud voluptate eiusmod esse amet reprehenderit velit. Ullamco
        voluptate in minim est proident sunt minim. Ex nostrud sint duis magna
        aliqua aliqua laborum exercitation occaecat dolore commodo incididunt.
        Sint mollit adipisicing nisi enim officia deserunt dolor mollit commodo
        do sit non. Qui commodo cillum sint ipsum deserunt ut in irure nisi
        officia esse ut sit. Occaecat id amet ut consequat dolore cupidatat
        nostrud dolore. Proident dolor nulla id ipsum do est esse exercitation
        reprehenderit.Non nisi enim commodo adipisicing sunt nostrud sunt in
        occaecat. Deserunt ipsum cillum minim nisi aliqua laboris quis laboris
        et incididunt minim ipsum sunt voluptate. Eiusmod tempor do consectetur
        labore labore do exercitation exercitation exercitation adipisicing elit
        minim. Duis reprehenderit dolore sunt cupidatat deserunt mollit. Ex
        commodo est in voluptate proident reprehenderit.Non id ex proident
        proident adipisicing. Fugiat amet ea esse irure officia. Excepteur
        exercitation reprehenderit sit nisi ad exercitation quis voluptate
        deserunt irure. Non aliquip dolore elit sint sunt Lorem nisi quis irure.
        Ut nulla id proident esse proident tempor consectetur qui nisi qui
        laborum enim qui. Dolore laboris in quis elit duis veniam.Aliqua officia
        eu ipsum Lorem aliqua consequat. Enim eiusmod incididunt dolor officia.
        Et ut consequat elit nostrud reprehenderit exercitation labore excepteur
        quis mollit pariatur. Velit nisi amet excepteur veniam duis commodo
        cillum. Pariatur non aliquip culpa laboris do ut eiusmod magna officia
        esse laborum eiusmod pariatur aute. Id culpa est in nostrud et qui
        eiusmod labore reprehenderit culpa velit adipisicing ipsum. Enim duis id
        in exercitation tempor culpa deserunt et labore laborum sunt
        exercitation laboris.
      </Typography>
      {isAuthenticated && !isOnboarded && (
        <Typography>
          To get the best out of Pinfluencer, please complete!!!{" "}
          <Link
            underline="hover"
            color="blue"
            onClick={() => nav("onboarding")}
          >
            Onboarding
          </Link>
        </Typography>
      )}
    </Stack>
  );
};

export default HomePage;
