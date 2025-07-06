---
title: 'ARM/AARCH64 Strong Speculative Load Hardening SLH'
publishedAt: '2024-04-08'
summary: 'A little blurb on an Arm based Spectre meltdown mitigation'
---

<img src="../ASSLH_logo.png" alt="logo" width="500"/>

LLVM already includes mitigations against Spectre v1 variants using Speculative Load Hardening (SLH). However, recent research shows that this is still susceptible to control-flow and data leakage attacks. **Ultimate SLH (USLH)** was proposed at USENIX '23 and builds on earlier work known as **SSLH**. These enhancements were originally designed for x86 architectures.

To demonstrate that ARM is also vulnerable, we developed several proof-of-concept (PoC) attacks. We then updated the `AARCH64SLH` pass in LLVM to address the vulnerabilities described in the paper with our own patches inspired by USLH.

👉 [View the GitHub Repository](https://github.com/mbhuUM/ArmSSLH)
