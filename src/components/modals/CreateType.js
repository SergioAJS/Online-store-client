import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Form, Button } from 'react-bootstrap';
import { Context } from '../../index';
import { createType } from '../../http/deviceAPI';

function CreateType({show, onHide}) {
    const [value, setValue] = useState(Context);

    const addType = () => {
        createType({name: value}).then(data => {
            setValue(' ')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button varient="outline-success" onClick={onHide}>Закрыть</Button>
                <Button varient="outline-danger" onClick={addType}>Добавить</Button> 
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;