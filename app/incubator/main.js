"use client"

import dynamic from "next/dynamic";
import Container from "../components/container";

import { useContext } from "react";
import { FaucetContext } from "../contexts/FaucetContext";

import HeroImage from "./image";
import IncubatorContent from "./content";
const Faucet = dynamic(() => import('../components/faucet'));

export default function IncubatorMain() {
  const { showFaucet } = useContext(FaucetContext);

  return (
    <>
      <Container className="flex flex-wrap">
        <HeroImage />
        {showFaucet ? <Faucet /> : <IncubatorContent />}
      </Container>
    </>
  );
}
