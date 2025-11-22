
export async function createRepl() {
    for await (const line of console) {
        console.log(`You entered: ${line}`);
    }
}