import { message, Modal, Radio } from "antd";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { editGameThunk } from "../../redux/gameSlice";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { checkProbability } from "../../helpers";
import { useLocation } from "react-router-dom";
import { GameContext } from "../../context";

export const EditModal = ({ onClose, editGame }) => {
  const dispatch = useDispatch();
  const { setBetGames } = useContext(GameContext);
  const { _id } = editGame;
  const location = useLocation();
  const type = location.pathname === "/ordinar-board" ? "ordinar" : "express";
  const [inputsData, setInputsData] = useState({
    coeff: {
      value: editGame.coeff,
    },
    date: {
      value: editGame.date,
    },

    leagueAm: {
      value: editGame.league.am,
    },

    leagueEn: {
      value: editGame.league.en,
    },
    leagueRu: {
      value: editGame.league.ru,
    },
    risk: {
      value: editGame.risk,
    },
    positionAm: {
      value: editGame.position.am,
    },
    positionEn: {
      value: editGame.position.en,
    },
    positionRu: {
      value: editGame.position.ru,
    },
    team1Am: {
      value: editGame.team1.am,
    },
    team1En: {
      value: editGame.team1.en,
    },
    team1Ru: {
      value: editGame.team1.ru,
    },
    team2Am: {
      value: editGame.team2.am,
    },
    team2En: {
      value: editGame.team2.en,
    },
    team2Ru: {
      value: editGame.team2.ru,
    },
    descriptionAm: {
      value: editGame.description.am,
    },
    descriptionEn: {
      value: editGame.description.en,
    },
    descriptionRu: {
      value: editGame.description.ru,
    },
    sport: {
      value: editGame.sport,
    },
    probability: "",
    matchDay: {
      value: editGame.matchDay,
    },
  });

  const [matchDayGame, setMatchDayGame] = useState(editGame.matchDay);

  const changeMatchDayGame = (e) => {
    const type = e.target.value;
    setMatchDayGame(type);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setInputsData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };
    });
  };

  const setNewGameHandler = (editFormData) => {
    setBetGames((prev) => {
      return prev.map((game) => {
        if (game.id === editFormData.id) {
          return editFormData;
        }
        return game;
      });
    });

    message.success("Game is changed");
    onClose();
  };

  const onFinish = (e) => {
    e.preventDefault();
    const {
      positionAm: { value: positionAm },
      positionEn: { value: positionEn },
      positionRu: { value: positionRu },
      coeff: { value: coeff },
      leagueAm: { value: leagueAm },
      leagueEn: { value: leagueEn },
      leagueRu: { value: leagueRu },
      sport: { value: sport },
      team1Am: { value: team1Am },
      team1En: { value: team1En },
      team1Ru: { value: team1Ru },
      team2Am: { value: team2Am },
      team2En: { value: team2En },
      team2Ru: { value: team2Ru },
      descriptionAm: { value: descriptionAm },
      descriptionEn: { value: descriptionEn },
      descriptionRu: { value: descriptionRu },
      probability: { value: probability },
      risk: { value: risk },
    } = inputsData;

    const editFormData = {
      id: type === "ordinar" ? undefined : editGame.id,
      team1: {
        am: team1Am,
        en: team1En,
        ru: team1Ru,
      },
      team2: {
        am: team2Am,
        en: team2En,
        ru: team2Ru,
      },
      risk:
        probability || coeff !== editGame.coeff
          ? checkProbability(coeff, probability)
          : risk,
      sport,
      coeff: +coeff,
      league: {
        am: leagueAm,
        en: leagueEn,
        ru: leagueRu,
      },
      position: {
        am: positionAm,
        en: positionEn,
        ru: positionRu,
      },
      description: {
        am: type === "ordinar" ? descriptionAm : undefined,
        en: type === "ordinar" ? descriptionEn : undefined,
        ru: type === "ordinar" ? descriptionRu : undefined,
      },
      date: editGame.date,
    };

    if (type === "ordinar") {
      editFormData.matchDay = matchDayGame;
    }

    if (editFormData.risk === "wrong") {
      message.error("You can't add this game");
    } else {
      type === "ordinar"
        ? dispatch(editGameThunk({ editFormData, _id, onClose }))
        : setNewGameHandler(editFormData);
    }
  };

  return (
    <Modal
      title="Edit Game"
      open={true}
      onOk={onFinish}
      onCancel={onClose}
      width={1000}
      footer={null}
    >
      <Form onSubmit={onFinish}>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="leagueAm">League Arm</Label>
              <Input
                value={inputsData.leagueAm.value}
                id="leagueAm"
                name="leagueAm"
                placeholder="League Am"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="team1Am">Team 1 Arm</Label>
              <Input
                value={inputsData.team1Am.value}
                id="team1Am"
                name="team1Am"
                placeholder="Team 1 Am"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="team2Am">Team 2 Arm</Label>
              <Input
                value={inputsData.team2Am.value}
                id="team2Am"
                name="team2Am"
                placeholder="Team 2 Am "
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="postionAm">Position Arm</Label>
              <Input
                value={inputsData.positionAm.value}
                id="positionAm"
                name="positionAm"
                placeholder="Postion Am "
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="leagueEn">League En</Label>
              <Input
                value={inputsData.leagueEn.value}
                id="leagueEn"
                name="leagueEn"
                placeholder="league En"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="team1En">Team 1 En</Label>
              <Input
                value={inputsData.team1En.value}
                id="team1En"
                name="team1En"
                placeholder="team1 En"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="team2En">Team 2 En</Label>
              <Input
                value={inputsData.team2En.value}
                id="team2En"
                name="team2En"
                placeholder="Team 2 En "
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="positionEn">Position En</Label>
              <Input
                value={inputsData.positionEn.value}
                id="positionEn"
                name="positionEn"
                placeholder="Position En "
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="leagueRu">League Ru</Label>
              <Input
                value={inputsData.leagueRu.value}
                id="leagueRu"
                name="leagueRu"
                placeholder="league Ru"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="team1Ru">Team 1 Ru</Label>
              <Input
                value={inputsData.team1Ru.value}
                id="team1Ru"
                name="team1Ru"
                placeholder="team1 Ru"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="team2Ru">Team 2 Ru</Label>
              <Input
                value={inputsData.team2Ru.value}
                id="team2Ru"
                name="team2Ru"
                placeholder="Team 2 Ru "
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="positionRu">Position Ru</Label>
              <Input
                value={inputsData.positionRu.value}
                id="positionRu"
                name="positionRu"
                placeholder="Position Ru"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <FormGroup>
              <Label for="probability">Probability</Label>
              <Input
                id="probability"
                name="probability"
                placeholder="probability"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="coeff">Coefficient</Label>
              <Input
                value={inputsData.coeff.value}
                id="coeff"
                name="coeff"
                placeholder="coeff"
                type="text"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          {type === "ordinar" ? (
            <Col md={3}>
              <Radio.Group
                style={{ marginLeft: 10, marginTop: 30 }}
                onChange={changeMatchDayGame}
                defaultValue={matchDayGame}
              >
                <Radio.Button value="yes">Yes</Radio.Button>
                <Radio.Button value="no">No</Radio.Button>
              </Radio.Group>
            </Col>
          ) : (
            ""
          )}
        </Row>
        {type === "ordinar" ? (
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="descriptionAm">Description Arm</Label>
                <Input
                  value={inputsData.descriptionAm.value}
                  id="descriptionAm"
                  name="descriptionAm"
                  placeholder="Description Am"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="descriptionEn">Description En</Label>
                <Input
                  value={inputsData.descriptionEn.value}
                  id="descriptionEn"
                  name="descriptionEn"
                  placeholder="Description En"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="descriptionRu">Description Ru</Label>
                <Input
                  value={inputsData.descriptionRu.value}
                  id="descriptionRu"
                  name="descriptionRu"
                  placeholder="Description Ru Optional"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
        ) : (
          ""
        )}
        <Button color="primary" onClick={onFinish}>
          Edit Games
        </Button>{" "}
      </Form>
    </Modal>
  );
};
