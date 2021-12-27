import React from "react";
import "./About.css";
import styled from "styled-components";
import Countdown from "react-countdown";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { shortenAddress } from "../../candy-machine";
import { Button, CircularProgress } from "@material-ui/core";

const MintButton = styled(Button)``; // add your styles here

const ConnectButton = styled(WalletDialogButton)``;

const About = ({
  wallet,
  isSoldOut,
  isMinting,
  isActive,
  onMint,
  startDate,
  setIsActive,
  renderCounter,
  itemsAvailable,
  itemsRedeemed,
  balance,
}) => {
  return (
    <section className="about" id="about">
      <div className="gradient">
        <h3>WHAT ARE BAKSO MANIACS?</h3>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-10 col-11 d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="1000"
          >
            <p>
              Bakso Mania is a collection of randomly generated NFTs known as
              Bakso Maniacs on the Solana Blockchian. The 1st generation consist
              of 10,000 randomly assembled Bakso. Bakso have a variety of
              rarity, expressions, and colors! Bakso traditionally is an
              Indonesian noodle and meat ball cuisine, but these Bakso Maniacs
              jumped out of the cooking pots ready to explore the world of Bakso
              Mania. Be sure to get your own!
            </p>

            <div className="d-flex justify-content-center align-items-center flex-column"></div>
            {wallet ? (
              <>
                <MintButton
                  disabled={isSoldOut || isMinting || !isActive}
                  onClick={onMint}
                  variant="contained"
                  className="primaryBtn leftMargin"
                >
                  {isSoldOut ? (
                    "SOLD OUT"
                  ) : isActive ? (
                    isMinting ? (
                      <CircularProgress />
                    ) : (
                      "MINT"
                    )
                  ) : (
                    <Countdown
                      date={startDate}
                      onMount={({ completed }) =>
                        completed && setIsActive(true)
                      }
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  )}
                </MintButton>
                <br />
                <p className="mb-2">
                  Wallet address :{" "}
                  {shortenAddress(wallet.publicKey.toBase58() || "")}
                </p>

                <p className="mb-2">
                  Supply: {itemsRedeemed}/ {itemsAvailable}
                </p>
                <p className="mb-2">
                  Balance: {(balance || 0).toLocaleString()} SOL
                </p>
              </>
            ) : (
              <ConnectButton className="primaryBtn leftMargin">
                Connect Wallet
              </ConnectButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
