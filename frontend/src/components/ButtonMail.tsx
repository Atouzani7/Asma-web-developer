
import { useState } from "react";

import Contact from "./Contact";
import Modal from "./Modal";


export default function ButtonMail() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);



    return (
        <div>
            <button
                onClick={handleOpenModal}
                className="bg-greenPastel-100 hover:bg-greenPastel-200 text-black py-2 px-4 rounded"
            >
                Me contacter
            </button>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <Contact />
            </Modal>
        </div>
    )
}