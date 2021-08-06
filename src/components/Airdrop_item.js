import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import RedditIcon from "@material-ui/icons/Reddit";
import FacebookIcon from "@material-ui/icons/Facebook";
import AndroidOutlinedIcon from "@material-ui/icons/AndroidOutlined";
function Airdrop_item() {
    return (
        <>
            <section className="Airdrop_item">
                <div
                    className="container"
                    style={{
                        padding: "30px",
                        background: "rgba(36, 76, 198, 0.2)",
                        border: "1px solid #244CC6",
                        backdropFilter: "blur(30px)",
                    }}
                >
                    <div className="row">
                        <div className="col-md-4">
                            <div
                                className="drop_detail d-flex justify-content-evenly"
                                style={{ marginRight: "45px" }}
                            >
                                <div className="drop_img">
                                    <img src="/img/lotto.png" alt="" />
                                </div>
                                <div className="drop_name">
                                    <h4>Lotto (LOTTO)</h4>
                                    <span className="online">Active</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 align-self-center">
                            <div className="end_date">
                                <p>30 May 2021</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div
                                className="row"
                                style={{
                                    width: " 154px",
                                    marginLeft: " auto",
                                    marginRight: "auto",
                                    marginBottom: "10px",
                                }}
                            >
                                <div className="col-3">
                                    <TwitterIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                                <div className="col-3">
                                    <TelegramIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                                <div className="col-3">
                                    <YouTubeIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                                <div className="col-3">
                                    <AlternateEmailIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                            </div>

                            <div
                                className="row"
                                style={{
                                    width: " 154px",
                                    margin: " 0 auto",
                                }}
                            >
                                <div className="col-3">
                                    <RedditIcon style={{ color: " #9BA9CC" }} />
                                </div>
                                <div className="col-3">
                                    <FacebookIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                                <div className="col-3">
                                    <InstagramIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                                <div className="col-3">
                                    <AndroidOutlinedIcon
                                        style={{ color: " #9BA9CC" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 align-self-center">
                            <div className="reward">
                                <h3>~ 50 USD</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Airdrop_item;
