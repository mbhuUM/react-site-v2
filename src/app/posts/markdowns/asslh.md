---
title: 'ASSLH'
publishedAt: '2024-04-08'
summary: 'A little blurb on an Arm based Spectre meltdown protection'
---

## ARM/AARCH64 Strong Speculative Load Hardening


LLVM already has mitigations against spectre v1 variants with speculative load-hardening (SLH). However, current research finds this is still susceptible to control flow and data leakage attacks. Ultimate SLH (USLH) was proposed in USENIX '23 which adds passes to mitigate most forms of v1 vulnerabilities that also built upon existing work named SSLH. These were specifically designed for x86 usage, as such, we developed various PoC attacks to show that ARM was vulnerable and updated the AARCH64SLH Pass to fix various vulnerabilities outlined in the paper.

[Click to go to Repo](https://github.com/mbhuUM/ArmSSLH)

