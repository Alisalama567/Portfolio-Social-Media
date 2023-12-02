import {  useDisclosure } from '@mantine/hooks';
import {  Modal,Button } from '@mantine/core';

function ProfileModel({modelopened , setmodelopend}) {
  const [opened, { open, close }] = useDisclosure();

  return (
    <>
      <Modal
        opened={modelopened}
        onClose={()=>setmodelopend(false)}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form className='infoform'>
          <h3>Your Info</h3>
        </form>
      </Modal>

    </>
  );
}
export default ProfileModel;