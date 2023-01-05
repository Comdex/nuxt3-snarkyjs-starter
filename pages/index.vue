<template>
    <h1> snarkyjs</h1>

    <div>
       
        <div>Public Key: {{ address }} </div>

        <n-button type="success" @click="genAddress">
            genAddress
        </n-button>
       
    </div>
</template>
  
<script setup>
import {
    PrivateKey,
} from 'snarkyjs';
import ZkappWorkerClient from '../zkapp/zkappWorkerClient';

onMounted(async () => {
    const zkappWorkerClient = new ZkappWorkerClient();

    console.log('Loading SnarkyJS...');
    await zkappWorkerClient.loadSnarkyJS();
    console.log('done');
});

let address = ref('');
const genAddress = () => {
    let prikey = PrivateKey.random();
    let pubKey = prikey.toPublicKey();
    address.value = pubKey.toBase58();
}

</script>