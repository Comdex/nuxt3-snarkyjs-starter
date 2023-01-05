<template>
    <h1> address proof service</h1>

    <div>
        <div>
            <!-- <button @click="metamaskConnect">Connect</button>
        <button @click="metamaskSwitchChain">Switch network</button>
        <button @click="metamaskSign(connectedAddress, 'test.bit')">Sign Message</button>
        <div>connected: {{ isConnected }}</div>
        <div>Address: {{ connectedAddress ?? 'null' }}</div> -->
            <div>Public Key: {{ address }} </div>
            <button @click="genAddress">genAddress</button>
        </div>
    </div>
</template>
  
<script setup>
import {
    PublicKey,
    PrivateKey,
    Field,
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