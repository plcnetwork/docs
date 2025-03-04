---
sidebar_position: 6
---

# Next Steps

This was a simple example using the escrow contract we developed, but it should show you what is possible. You are limited only by the wasm code you upload and the json messages you send. The next step is [Hijack Escrow tutorial](/tutorials/hijack-escrow/intro) where you will edit a smart contract to put a backdoor that enables a thief to steal funds. If you want a guided tutorial to build a contract from start to finish, check out the [name service tutorial](/tutorials/name-service/intro).

There are a variety of curated video and tutorial resources, which you can check out here: [Videos and Workshops](/tutorials/videos-workshops)

If you feel you understand enough (and have prior experience with rust), feel free to grab [`cosmwasm-template`](https://github.com/CosmWasm/cosmwasm-template) and use that as a starting place to start hacking. Do not clone the repo, but rather follow the [README](https://github.com/CosmWasm/cosmwasm-template/blob/master/README.md) on how to use `cargo-generate` to generate your skeleton.

In either case, there is documentation in [`go-cosmwasm`](https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md) and [`cosmwasm`](https://github.com/CosmWasm/cosmwasm/blob/master/README.md) that may be helpful. If you run into any issues (either bugs or just confusion), please submit them on [`cosmwasm/issues`](https://github.com/CosmWasm/cosmwasm/issues) if they deal with the smart contract, and [`wasmd/issues`](https://github.com/CosmWasm/wasmd/issues) if they have to do with the SDK integration.

Happy Hacking!
