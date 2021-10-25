import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IdeaCreate from './IdeaCreate';
import IdeaEdit from './IdeaEdit';
const ModalPop = (props) => {
    const {
        buttonLabel,
        // className
    } = props;
    const action = props.action
    const idea = props.idea
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    if (action === 'create') {
        return (
            <div >
                <Button onClick={toggle} id="modal-btn">{buttonLabel}</Button>
                <Modal className="thumb" isOpen={modal} toggle={toggle} >
                    <ModalHeader className="thumb" toggle={toggle}>Submit your idea</ModalHeader>
                    <ModalBody>
                        <IdeaCreate modal={modal} setModal={setModal} toggle={toggle} />
                    </ModalBody>
                </Modal>
            </div>
        );
    } else if (action === 'edit') {
        console.log(`idea at modal: ${idea.title}`)
        return (
            <div>
                <Button onClick={toggle} id="modal-btn">{buttonLabel}</Button>
                <Modal className="thumb" isOpen={modal} toggle={toggle} idea={idea}>
                    <ModalHeader className="thumb" toggle={toggle}>Edit this idea</ModalHeader>
                    <ModalBody>
                        <IdeaEdit idea={idea} modal={modal} setModal={setModal} toggle={toggle} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }

}

export default ModalPop;