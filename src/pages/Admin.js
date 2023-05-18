import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import {REGISTRATION_ROUTE} from '../utils/consts'


const Admin = () => {
    const history = useNavigate();
    const [brandVisible, setBrandVisble] = useState(false)
    const [typeVisible, setTypeVisble] = useState(false)
    const [deviceVisible, setDeviceVisble] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisble(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisble(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisble(true)}
            >
                Добавить устройство
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => history(REGISTRATION_ROUTE)}
            >
                Добавить админа
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisble(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisble(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisble(false)}/>
        </Container>
    );
};

export default Admin;