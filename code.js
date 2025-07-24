

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c4bec6b6-f4ba-44f7-bd89-0b6ad862b44b","3bcfcf17-470e-4dde-9c93-7d82bb08332a","347b59d5-b1bc-40b0-a7db-1b7e9195be95","ad8dc128-4ad8-493b-a1e2-4f338bf45cab","209dd35b-4aec-4db0-9826-4b136196ce23","8b5226e8-e48d-4174-8cbb-fcc3d0d0c8f1","0991e16b-6600-4d34-8872-fc051717b208","902d3587-2d63-4695-b0dc-f3e100f057c1","6561ac10-3704-4472-92bf-8528cd7b4bcc","bc430551-d138-44e6-834d-c8ed02d0ac3e","98d0ab34-e76c-47cf-9e53-92fa3a1d8418","d8694e26-24ca-4a9e-a80e-b97c58f61b8f","8b2b0f26-e285-45d6-bc64-f26023efe937","356fe2aa-a34b-4059-8552-3fbc890199da","20da21a1-2f25-4402-af62-1b620da57a01","9e8a9c04-ce4f-467d-8c78-45686a8607f9","18f33eb2-66c6-42ef-96a6-d265c36b169e","3b49e2ef-4bd5-4aeb-83ad-5d19fb4bd77f","7d8bafce-4e58-4f82-9695-47a5c2fc035f","9e413874-1353-4d86-b733-e14962998272","45c5a4d6-3fca-4dd2-8b06-84fdac37e77d","9aa0dc48-3693-4580-bd07-1cf40c087912","e4471c0f-a6de-42d5-978b-5618db583b18","a483cb9e-28c4-4341-991c-707f25ff3386","c4498016-2afb-41a8-811f-c1bb4f991166","fe3c21b6-0bea-4750-a723-e2e5f884ba84","12fee829-3f7a-4872-982e-26ca185625a1","b5d57c69-76aa-4563-89d1-ebfcb9257b12","224d1873-c89e-4666-966f-26f84eb8485f","05c58281-889d-4805-9cf8-1e490fd1e7f0","45bd2b74-808e-4fb9-af83-17b0dc77ac6c","c67da457-873d-48db-aefc-53fa11479c66","82e85f4b-b4a6-4bf6-a442-00b205f38fbf","65f8997d-d010-455c-a0fb-5c375c239f3d","ef3165c8-d527-45ec-b363-252af57772b8","d26b6d66-10e8-4011-a73b-ea1cac04f35f","ad7c605b-443e-4fef-9ebf-9d6b1b242cc4","9a45ef0c-eea8-4fb3-a9d6-d537eb30627c","323ace8d-1c64-425c-9178-ffce57be33cb","b01209c6-3c0f-4280-ae34-f9c91227f4e6","c28b73df-a4a3-429e-9a91-0a9534de638a","118c5873-458a-4bf4-95c6-e167a4ebd727","e399fd19-12fa-42b0-b8ad-6eb3538a9f1e","98f82715-69b0-4eaa-ad50-f3b0c1d6d566","051d9835-63e8-4f5f-bd2e-541d4c8b8f87","9cab8b32-135c-413d-95e7-bbfd50773cce","979eed18-c821-48b5-b5c0-11996076a1d5","8d70ae42-c12a-466d-a632-3ac7163821d5","e350c868-23ae-4ae4-a2aa-b07d2ba90d4e","a454e394-a2e5-4ee3-82a8-358add96c84c","dc76180f-4e46-42ef-ab6e-716443119da9","85cdbc8a-e77c-48a1-85b1-47b4ceecf747","4801caf8-08cd-4f4c-9f15-9bf33fdd0eff","7cd2699b-75c8-44d0-8893-90008c5eac1a","dab83b67-7ab7-4de1-b1e9-864923d2f1c0","b9a0b458-f262-499d-a41f-f3a67d26aa2f","f0f32500-1bff-434c-bf09-85daac2b2104","293cfa3e-a687-42f6-8b44-7de40db8e32f","5a89a3b1-63f2-4064-830f-93f4078583f7","6320c7fb-93c9-453f-92e1-d6fc024f8430","9015b57d-efc4-4e2f-b1f0-4d41567671ad","0137d051-802c-402d-a37c-46c9d44b2682","ee49a018-3a9a-4196-9002-59c3381f8a1e","c20ba952-0bc7-4e71-9242-6d11d091f3e0"],"propsByKey":{"c4bec6b6-f4ba-44f7-bd89-0b6ad862b44b":{"name":"saw","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":3,"version":"7aRv7cGvtPrW8kD6pBi0p2MyShGowMCN","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/c4bec6b6-f4ba-44f7-bd89-0b6ad862b44b.png"},"3bcfcf17-470e-4dde-9c93-7d82bb08332a":{"name":"warnSaw","sourceUrl":null,"frameSize":{"x":400,"y":100},"frameCount":4,"looping":true,"frameDelay":5,"version":"_gJk23AmiWYdAxWsopAQZ9VzZyrcuQ1X","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/3bcfcf17-470e-4dde-9c93-7d82bb08332a.png"},"347b59d5-b1bc-40b0-a7db-1b7e9195be95":{"name":"laserCharge","sourceUrl":null,"frameSize":{"x":15,"y":705},"frameCount":3,"looping":true,"frameDelay":12,"version":"EhgmzV5qlWZxR010ZZCh2z_1qmnj7.uU","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":705},"rootRelativePath":"assets/347b59d5-b1bc-40b0-a7db-1b7e9195be95.png"},"ad8dc128-4ad8-493b-a1e2-4f338bf45cab":{"name":"laserActive","sourceUrl":null,"frameSize":{"x":18,"y":531},"frameCount":4,"looping":true,"frameDelay":3,"version":"oXyAm_xzLbtlqS1Z4HMOmgstxReIwkas","loadedFromSource":true,"saved":true,"sourceSize":{"x":72,"y":531},"rootRelativePath":"assets/ad8dc128-4ad8-493b-a1e2-4f338bf45cab.png"},"209dd35b-4aec-4db0-9826-4b136196ce23":{"name":"laserActive2","sourceUrl":null,"frameSize":{"x":20,"y":800},"frameCount":2,"looping":false,"frameDelay":4,"version":"tg7bQvXVeIAO2oKbyNlpEpLiOxQJhAf6","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":800},"rootRelativePath":"assets/209dd35b-4aec-4db0-9826-4b136196ce23.png"},"8b5226e8-e48d-4174-8cbb-fcc3d0d0c8f1":{"name":"flameThrower","sourceUrl":null,"frameSize":{"x":70,"y":70},"frameCount":1,"looping":true,"frameDelay":12,"version":"vnPtHp5gXKQcVyblHU_9lur1TVCKBILv","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":70},"rootRelativePath":"assets/8b5226e8-e48d-4174-8cbb-fcc3d0d0c8f1.png"},"0991e16b-6600-4d34-8872-fc051717b208":{"name":"fireLow","sourceUrl":null,"frameSize":{"x":400,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"CvSXA06THVKlIIaL0p0FR0cgr0mzDBJg","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":10},"rootRelativePath":"assets/0991e16b-6600-4d34-8872-fc051717b208.png"},"902d3587-2d63-4695-b0dc-f3e100f057c1":{"name":"fireOn","sourceUrl":null,"frameSize":{"x":490,"y":20},"frameCount":3,"looping":true,"frameDelay":4,"version":"0zV0wC4pK8KlvucUGnR2oSu3bxgDUcyt","loadedFromSource":true,"saved":true,"sourceSize":{"x":490,"y":60},"rootRelativePath":"assets/902d3587-2d63-4695-b0dc-f3e100f057c1.png"},"6561ac10-3704-4472-92bf-8528cd7b4bcc":{"name":"player2","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"rZ0ToqB5KMvinzkNltxYFK7d9Thj0cNo","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/6561ac10-3704-4472-92bf-8528cd7b4bcc.png"},"bc430551-d138-44e6-834d-c8ed02d0ac3e":{"name":"player1","sourceUrl":null,"frameSize":{"x":28,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"xOazh2f8lmiC4UK.paGgkG8rOOm4r6WL","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":28},"rootRelativePath":"assets/bc430551-d138-44e6-834d-c8ed02d0ac3e.png"},"98d0ab34-e76c-47cf-9e53-92fa3a1d8418":{"name":"player3","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"fqHHH.9TEx.jCtMr1ebb0EsXd5Z4wyUJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/98d0ab34-e76c-47cf-9e53-92fa3a1d8418.png"},"d8694e26-24ca-4a9e-a80e-b97c58f61b8f":{"name":"playerBright3","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"fu6XxTM7KKiZhIRCEJXK5XkoevYMWkNm","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/d8694e26-24ca-4a9e-a80e-b97c58f61b8f.png"},"8b2b0f26-e285-45d6-bc64-f26023efe937":{"name":"playerBright2","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yj2j2hG2FwZ0sQF8F4D_Gs7yyxAZ70ib","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/8b2b0f26-e285-45d6-bc64-f26023efe937.png"},"356fe2aa-a34b-4059-8552-3fbc890199da":{"name":"playerBright1","sourceUrl":null,"frameSize":{"x":28,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"XKZvKch1dbyUieDf9GzU3ciPrU4vYntD","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":28},"rootRelativePath":"assets/356fe2aa-a34b-4059-8552-3fbc890199da.png"},"20da21a1-2f25-4402-af62-1b620da57a01":{"name":"playerBright_2","sourceUrl":null,"frameSize":{"x":96,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"dGK7lFzwZRfVbRWozDzhNblKMmRed8eb","loadedFromSource":true,"saved":true,"sourceSize":{"x":96,"y":96},"rootRelativePath":"assets/20da21a1-2f25-4402-af62-1b620da57a01.png"},"9e8a9c04-ce4f-467d-8c78-45686a8607f9":{"name":"playerBright_1","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"odkU4WwtdlxpX.01oFWmaftRK33abk9p","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/9e8a9c04-ce4f-467d-8c78-45686a8607f9.png"},"18f33eb2-66c6-42ef-96a6-d265c36b169e":{"name":"playerBright_3","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"c4wB_8ruWo56YLSZadqTXip89SmhIM9j","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":24},"rootRelativePath":"assets/18f33eb2-66c6-42ef-96a6-d265c36b169e.png"},"3b49e2ef-4bd5-4aeb-83ad-5d19fb4bd77f":{"name":"playerFlash","sourceUrl":null,"frameSize":{"x":26,"y":26},"frameCount":12,"looping":true,"frameDelay":2,"version":"dwmGIWvZNySX.c0ooEDihHEPa_X89gil","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":104},"rootRelativePath":"assets/3b49e2ef-4bd5-4aeb-83ad-5d19fb4bd77f.png"},"7d8bafce-4e58-4f82-9695-47a5c2fc035f":{"name":"playerFlash2","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":2,"looping":true,"frameDelay":12,"version":"9JKwyYsgAUBWuBVl1eD.HY2LCJ2Mg8m7","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":48},"rootRelativePath":"assets/7d8bafce-4e58-4f82-9695-47a5c2fc035f.png"},"9e413874-1353-4d86-b733-e14962998272":{"name":"playerFlash1","sourceUrl":null,"frameSize":{"x":34,"y":34},"frameCount":2,"looping":true,"frameDelay":12,"version":"..HU1ltWcvt6g1tDeamx7upzBv9n3b55","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":68},"rootRelativePath":"assets/9e413874-1353-4d86-b733-e14962998272.png"},"45c5a4d6-3fca-4dd2-8b06-84fdac37e77d":{"name":"playerFlash3","sourceUrl":null,"frameSize":{"x":24,"y":24},"frameCount":2,"looping":true,"frameDelay":12,"version":"sDJ8bym.pLXtM1SBVFiEAxtM9g3LzG0L","loadedFromSource":true,"saved":true,"sourceSize":{"x":24,"y":48},"rootRelativePath":"assets/45c5a4d6-3fca-4dd2-8b06-84fdac37e77d.png"},"9aa0dc48-3693-4580-bd07-1cf40c087912":{"name":"explosionRadius","sourceUrl":null,"frameSize":{"x":160,"y":160},"frameCount":5,"looping":true,"frameDelay":5,"version":"F0UyZl54BgVxCT2wmS0CtdVBk5k_.mcj","loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":480},"rootRelativePath":"assets/9aa0dc48-3693-4580-bd07-1cf40c087912.png"},"e4471c0f-a6de-42d5-978b-5618db583b18":{"name":"explosion","sourceUrl":null,"frameSize":{"x":174,"y":174},"frameCount":1,"looping":true,"frameDelay":12,"version":"DenXhf7puJX0V0uRP3FRmGI6l9lLQrhd","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":174},"rootRelativePath":"assets/e4471c0f-a6de-42d5-978b-5618db583b18.png"},"a483cb9e-28c4-4341-991c-707f25ff3386":{"name":"explosionSmall","sourceUrl":null,"frameSize":{"x":474,"y":474},"frameCount":1,"looping":true,"frameDelay":12,"version":"zZw81f9yDd7J9NdJX91f66xWDxwfVpnS","loadedFromSource":true,"saved":true,"sourceSize":{"x":474,"y":474},"rootRelativePath":"assets/a483cb9e-28c4-4341-991c-707f25ff3386.png"},"c4498016-2afb-41a8-811f-c1bb4f991166":{"name":"fireParticle","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"7b7ChuysMdpo1zPFiLhvZXOsNDcVcxgC","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/c4498016-2afb-41a8-811f-c1bb4f991166.png"},"fe3c21b6-0bea-4750-a723-e2e5f884ba84":{"name":"darkParticle","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"6E7SasuHH2rRw0rHeDS7tYWQmjiC.xMd","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/fe3c21b6-0bea-4750-a723-e2e5f884ba84.png"},"12fee829-3f7a-4872-982e-26ca185625a1":{"name":"lightParticle","sourceUrl":null,"frameSize":{"x":5,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"aVcYvxTyLPnYCqwcyv4jWsRxrCfXYfuR","loadedFromSource":true,"saved":true,"sourceSize":{"x":5,"y":5},"rootRelativePath":"assets/12fee829-3f7a-4872-982e-26ca185625a1.png"},"b5d57c69-76aa-4563-89d1-ebfcb9257b12":{"name":"backdrop","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":8,"looping":true,"frameDelay":5,"version":"fFbwkTJOUFdEHcQVF1mnOt.pwmWpxsLm","loadedFromSource":true,"saved":true,"sourceSize":{"x":1200,"y":1200},"rootRelativePath":"assets/b5d57c69-76aa-4563-89d1-ebfcb9257b12.png"},"224d1873-c89e-4666-966f-26f84eb8485f":{"name":"backdrop_easy","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"N27AjnirHnmynlygdlmwIyZEVnNL8wxp","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/224d1873-c89e-4666-966f-26f84eb8485f.png"},"05c58281-889d-4805-9cf8-1e490fd1e7f0":{"name":"backdrop_medium","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ukjSR7eYI40DQW_EgEVb5XaKsVrcoS7S","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/05c58281-889d-4805-9cf8-1e490fd1e7f0.png"},"45bd2b74-808e-4fb9-af83-17b0dc77ac6c":{"name":"backdrop_hard","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"qlam3ljsN9zxayhBlLH4YE2Kdn2jzNRS","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/45bd2b74-808e-4fb9-af83-17b0dc77ac6c.png"},"c67da457-873d-48db-aefc-53fa11479c66":{"name":"backdrop_difficulty","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"nifQudpHY3fnsoBmeUvggW4Imm1d1_2i","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/c67da457-873d-48db-aefc-53fa11479c66.png"},"82e85f4b-b4a6-4bf6-a442-00b205f38fbf":{"name":"box","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"9OPXXWCMeMM4KK.tM6fq5JBPjpd8Xsd_","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/82e85f4b-b4a6-4bf6-a442-00b205f38fbf.png"},"65f8997d-d010-455c-a0fb-5c375c239f3d":{"name":"beegBox","sourceUrl":null,"frameSize":{"x":120,"y":250},"frameCount":7,"looping":true,"frameDelay":5,"version":"z1MYv84aN9YXFcWr1Lo2SVES_k0ZmpPZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":500},"rootRelativePath":"assets/65f8997d-d010-455c-a0fb-5c375c239f3d.png"},"ef3165c8-d527-45ec-b363-252af57772b8":{"name":"help1","sourceUrl":null,"frameSize":{"x":120,"y":250},"frameCount":7,"looping":true,"frameDelay":5,"version":"rhMpV4.SGSocdr1a.KYH1ct4qdisy58f","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":500},"rootRelativePath":"assets/ef3165c8-d527-45ec-b363-252af57772b8.png"},"d26b6d66-10e8-4011-a73b-ea1cac04f35f":{"name":"help2","sourceUrl":null,"frameSize":{"x":120,"y":250},"frameCount":7,"looping":true,"frameDelay":5,"version":"jlv.XkZEje0OJSmhcuBQyFfLDDMQhNuU","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":500},"rootRelativePath":"assets/d26b6d66-10e8-4011-a73b-ea1cac04f35f.png"},"ad7c605b-443e-4fef-9ebf-9d6b1b242cc4":{"name":"help3","sourceUrl":null,"frameSize":{"x":120,"y":250},"frameCount":7,"looping":true,"frameDelay":5,"version":"FvQGV6dibti5iXI5aAPin6hfq0b1jUai","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":500},"rootRelativePath":"assets/ad7c605b-443e-4fef-9ebf-9d6b1b242cc4.png"},"9a45ef0c-eea8-4fb3-a9d6-d537eb30627c":{"name":"boxLock_hard","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"gnQbTGxh6e.ccORP5Il2r3tOAxo22Y.8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9a45ef0c-eea8-4fb3-a9d6-d537eb30627c.png"},"323ace8d-1c64-425c-9178-ffce57be33cb":{"name":"boxLock_medium","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"B8CEcpwrWFbXbDdzZKi9nV0LKURnmm_Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/323ace8d-1c64-425c-9178-ffce57be33cb.png"},"b01209c6-3c0f-4280-ae34-f9c91227f4e6":{"name":"boxLock__lunatic","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"c72aUSRGRg5ktP9n59RIx6Nxo5jY81US","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b01209c6-3c0f-4280-ae34-f9c91227f4e6.png"},"c28b73df-a4a3-429e-9a91-0a9534de638a":{"name":"boxGlowLock_hard","sourceUrl":null,"frameSize":{"x":120,"y":115},"frameCount":1,"looping":true,"frameDelay":12,"version":"thBeOoQG5WoPyuKfaBcL6TOaJ.03lrmC","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":115},"rootRelativePath":"assets/c28b73df-a4a3-429e-9a91-0a9534de638a.png"},"118c5873-458a-4bf4-95c6-e167a4ebd727":{"name":"boxGlowLock_medium","sourceUrl":null,"frameSize":{"x":119,"y":119},"frameCount":1,"looping":true,"frameDelay":12,"version":"NJjbntqncB6Ozk191qRQV0olo3jlMnxw","loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":119},"rootRelativePath":"assets/118c5873-458a-4bf4-95c6-e167a4ebd727.png"},"e399fd19-12fa-42b0-b8ad-6eb3538a9f1e":{"name":"boxGlowLock_lunatic","sourceUrl":null,"frameSize":{"x":119,"y":119},"frameCount":5,"looping":true,"frameDelay":12,"version":"uTdXrzpbQRWlBcf74HY6h3k_Q8uzm6HP","loadedFromSource":true,"saved":true,"sourceSize":{"x":238,"y":357},"rootRelativePath":"assets/e399fd19-12fa-42b0-b8ad-6eb3538a9f1e.png"},"98f82715-69b0-4eaa-ad50-f3b0c1d6d566":{"name":"boxGlow_blue","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NEfIQaePu0O2akQ4NIgP32iuydiymv5k","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/98f82715-69b0-4eaa-ad50-f3b0c1d6d566.png"},"051d9835-63e8-4f5f-bd2e-541d4c8b8f87":{"name":"boxGlow_easy","sourceUrl":null,"frameSize":{"x":100,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"wu.QCmfCT_Am8tb2YCOZfU2DbdSpBWSN","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":105},"rootRelativePath":"assets/051d9835-63e8-4f5f-bd2e-541d4c8b8f87.png"},"9cab8b32-135c-413d-95e7-bbfd50773cce":{"name":"boxGlow_medium","sourceUrl":null,"frameSize":{"x":119,"y":119},"frameCount":1,"looping":true,"frameDelay":12,"version":"zcXkXd361s5kuIO1PQj1SbBAVgqjsjVE","loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":119},"rootRelativePath":"assets/9cab8b32-135c-413d-95e7-bbfd50773cce.png"},"979eed18-c821-48b5-b5c0-11996076a1d5":{"name":"boxGlow_hard","sourceUrl":null,"frameSize":{"x":120,"y":115},"frameCount":1,"looping":true,"frameDelay":12,"version":".AuVN3CQbHpxu1rr1o66FRKsYGkXYPs_","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":115},"rootRelativePath":"assets/979eed18-c821-48b5-b5c0-11996076a1d5.png"},"8d70ae42-c12a-466d-a632-3ac7163821d5":{"name":"smallBoxGlow_rainbow","sourceUrl":null,"frameSize":{"x":50,"y":30},"frameCount":10,"looping":true,"frameDelay":12,"version":"LaNEIC7cVlIdyYvwUlTXMN7KVfDbbxUU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":150},"rootRelativePath":"assets/8d70ae42-c12a-466d-a632-3ac7163821d5.png"},"e350c868-23ae-4ae4-a2aa-b07d2ba90d4e":{"name":"smolBox","sourceUrl":null,"frameSize":{"x":50,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"xsbnAzuHvcnqpt.yXKxUmkXY629Ey5LP","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":30},"rootRelativePath":"assets/e350c868-23ae-4ae4-a2aa-b07d2ba90d4e.png"},"a454e394-a2e5-4ee3-82a8-358add96c84c":{"name":"test","sourceUrl":null,"frameSize":{"x":13,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"s0DsUZf8eL7SvymcXCvfuW7uIZwy9meS","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":8},"rootRelativePath":"assets/a454e394-a2e5-4ee3-82a8-358add96c84c.png"},"dc76180f-4e46-42ef-ab6e-716443119da9":{"name":"cannon","sourceUrl":null,"frameSize":{"x":40,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"BIf5EDX02Nc_A82KTHaHg9XL3fhsgzwg","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":40},"rootRelativePath":"assets/dc76180f-4e46-42ef-ab6e-716443119da9.png"},"85cdbc8a-e77c-48a1-85b1-47b4ceecf747":{"name":"laserWarn","sourceUrl":null,"frameSize":{"x":44,"y":400},"frameCount":4,"looping":true,"frameDelay":5,"version":"qO_G16yPJ7wWB9flp2TDSUnVsorrLA3X","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":400},"rootRelativePath":"assets/85cdbc8a-e77c-48a1-85b1-47b4ceecf747.png"},"4801caf8-08cd-4f4c-9f15-9bf33fdd0eff":{"name":"bigLaser","sourceUrl":null,"frameSize":{"x":56,"y":392},"frameCount":3,"looping":true,"frameDelay":3,"version":"OMq.n2AcLXqlj0RBPxuaKfz0cjy08VmQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":168,"y":392},"rootRelativePath":"assets/4801caf8-08cd-4f4c-9f15-9bf33fdd0eff.png"},"7cd2699b-75c8-44d0-8893-90008c5eac1a":{"name":"riceLaser","sourceUrl":null,"frameSize":{"x":20,"y":667},"frameCount":9,"looping":true,"frameDelay":3,"version":"PIfrhzFErudK897kRYZfR9BUYZ6PQ9ul","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":667},"rootRelativePath":"assets/7cd2699b-75c8-44d0-8893-90008c5eac1a.png"},"dab83b67-7ab7-4de1-b1e9-864923d2f1c0":{"name":"Spheres","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"WTgk97fmveT3QNdhmTcUN9ycoFS_fkVA","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":40},"rootRelativePath":"assets/dab83b67-7ab7-4de1-b1e9-864923d2f1c0.png"},"b9a0b458-f262-499d-a41f-f3a67d26aa2f":{"name":"BossVICTORY","sourceUrl":null,"frameSize":{"x":768,"y":96},"frameCount":5,"looping":true,"frameDelay":4,"version":"suVzQRGPnJV_OhgbuyqVG2QDqkjLS5eG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":768,"y":480},"rootRelativePath":"assets/b9a0b458-f262-499d-a41f-f3a67d26aa2f.png"},"f0f32500-1bff-434c-bf09-85daac2b2104":{"name":"Orb","sourceUrl":null,"frameSize":{"x":43,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"gbINl1MCmRvjDuwxRqow1MTEB07pXN4O","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":43,"y":30},"rootRelativePath":"assets/f0f32500-1bff-434c-bf09-85daac2b2104.png"},"293cfa3e-a687-42f6-8b44-7de40db8e32f":{"name":"Arrow","sourceUrl":null,"frameSize":{"x":171,"y":366},"frameCount":14,"looping":true,"frameDelay":2,"version":"Qf8lfUdpZGZF_cp5lKrEMAjPE5iYLBjZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":855,"y":1098},"rootRelativePath":"assets/293cfa3e-a687-42f6-8b44-7de40db8e32f.png"},"5a89a3b1-63f2-4064-830f-93f4078583f7":{"name":"bullet","sourceUrl":null,"frameSize":{"x":28,"y":22},"frameCount":1,"looping":true,"frameDelay":12,"version":"UnJ4klkNS4oCn2P1lCgf87v2mc2qGmNf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":22},"rootRelativePath":"assets/5a89a3b1-63f2-4064-830f-93f4078583f7.png"},"6320c7fb-93c9-453f-92e1-d6fc024f8430":{"name":"uiBackground","sourceUrl":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/6320c7fb-93c9-453f-92e1-d6fc024f8430.png","frameSize":{"x":410,"y":150},"frameCount":1,"looping":true,"frameDelay":4,"version":"9FlZPc8Ng..A.3sQaWn.MA1RMh6UJgB9","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":410,"y":150},"rootRelativePath":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/6320c7fb-93c9-453f-92e1-d6fc024f8430.png"},"9015b57d-efc4-4e2f-b1f0-4d41567671ad":{"name":"blankBackground","sourceUrl":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/9015b57d-efc4-4e2f-b1f0-4d41567671ad.png","frameSize":{"x":410,"y":150},"frameCount":1,"looping":true,"frameDelay":4,"version":"BgupHsAe_TB55UeV4KGQYwTkqdOkC44M","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":410,"y":150},"rootRelativePath":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/9015b57d-efc4-4e2f-b1f0-4d41567671ad.png"},"0137d051-802c-402d-a37c-46c9d44b2682":{"name":"heartBig","sourceUrl":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/0137d051-802c-402d-a37c-46c9d44b2682.png","frameSize":{"x":37,"y":37},"frameCount":1,"looping":true,"frameDelay":4,"version":"BWp7HJsNB_8gFZxyF_timFO9LfBPOuUX","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":37},"rootRelativePath":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/0137d051-802c-402d-a37c-46c9d44b2682.png"},"ee49a018-3a9a-4196-9002-59c3381f8a1e":{"name":"heartEmpty","sourceUrl":null,"frameSize":{"x":23,"y":23},"frameCount":7,"looping":false,"frameDelay":5,"version":"TN6HyvfzU8OZil27VQ9GwWYjBczExFPP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":69},"rootRelativePath":"assets/ee49a018-3a9a-4196-9002-59c3381f8a1e.png"},"c20ba952-0bc7-4e71-9242-6d11d091f3e0":{"name":"heart","sourceUrl":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/c20ba952-0bc7-4e71-9242-6d11d091f3e0.png","frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":4,"version":"rDefpoQj8UQJOr1J5.M._nJuNkRbvrET","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/v3/animations/otM01WnhLgDZwis47V3gGMnGzePPs0znxl3xAzcxE_8/c20ba952-0bc7-4e71-9242-6d11d091f3e0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//            \_______________________/       
//BRUTAL                                      MAYHEM


var visits=getKeyValue("visits");
getKeyValue("visits",function(visits){
  if(visits==null||visits=="undifined"){
    setKeyValue("visits",1);
  }else{
    setKeyValue("visits",visits+1);
    console.log(visits+1+" visits");
  }
});
function logPlayers(){
  getKeyValue("visits",function(visits){
    console.log(visits+" visits");
  });
}

/* */ 
//NOTES
prompt(prompt("WARNING: Flashing Colors\nMay Cause Sensory Overload"));
prompt("Use the WASD keys to navigate for both Menu and during game! Space has two different usages. One to use as an OK/BACK button for menu, one to dash during ingame.");

  //Creating variables and setting up the game {
  World.frameRate = 60;
  showMobileControls(true, true, false, true);
  var fireDuration = 0;
  var attackCoolDown = 20;
  var attack = 0;
  var dashMeter = 300;
  var dashDirection="";
  var player = createSprite(200, 200, 20, 20);
 player.setAnimation("player3"); 
  player.setCollider("rectangle",0,0,20,20);
  var playerSpeed = 3.5;
  var playerParticles=createGroup();
  var health = 3;
  var prehealth = 3;
  var invincibilityFrames= 0;
  var mode = "transition";
  var score = 0;
  var sawDuration = 0;
  var laserDuration = 0;
  var computerSpeed="fast";
  var tester=10;
  var cooldown=30;
  var start =true;
  var transitionTimer=15;
  var levelUnlock=3;
  var storm=false;
  var losingSANITY=[0,0,0,0,0,0,0,0,0,0];
  getKeyValue("losingSANITY",function(scores){
    console.log(typeof(scores));
    if(typeof(scores)!="object"){
      scores=[0,0,0,0,0,0,0,0,0,0];
      setKeyValue("losingSANITY",[0,0,0,0,0,0,0,0,0,0]);
    }
    losingSANITY=scores;
  });
  var PURENIGHTMARE=[0,0,0,0,0,0,0,0,0,0];
  getKeyValue("PURENIGHTMARE",function(scores){
    console.log(typeof(scores));
    if(typeof(scores)!="object"){
      scores=[0,0,0,0,0,0,0,0,0,0];
      setKeyValue("PURENIGHTMARE",[0,0,0,0,0,0,0,0,0,0]);
    }
    PURENIGHTMARE=scores;
  });
  var revolvingCHAOS=[0,0,0,0,0,0,0,0,0,0];
  getKeyValue("revolvingCHAOS",function(scores){
    console.log(typeof(scores));
    if(typeof(scores)!="object"){
      scores=[0,0,0,0,0,0,0,0,0,0];
      setKeyValue("revolvingCHAOS",[0,0,0,0,0,0,0,0,0,0]);
    }
    revolvingCHAOS=scores;
  });
  var grid=createGroup();
  var longShotFont = loadFont("https://studio.code.org/v3/assets/ZnWhBsXQ6E5AMJualrNdPL8rrEoXEK4cmAGFt8jCaUw/Long_Shot.png");
  if (window.getURLPath()[3] == "view") {
    while (true) {
      prompt("Sorry, we cannot allow you to use the console");
  }
}
  
//}


//Sprites & others {
  //Attacks {
    //Saw {
      var saws=createGroup();
      var saw1 = createSprite(600, 200);
      var saw2 = createSprite(-200, 325);
      var saw3 = createSprite(-200, 75);
      saws.add(saw1);
      saws.add(saw2);
      saws.add(saw3);
      saw1.setAnimation("saw");
      saw2.setAnimation("saw");
      saw3.setAnimation("saw");
      saw2.width =- 100;
      saw3.width =- 100;
      saw1.setCollider("circle", 0, 0, 40);
      saw2.setCollider("circle", 0, 0, 40);
      saw3.setCollider("circle", 0, 0, 40);
      saw1.rotationSpeed =- 5;
      saw2.rotationSpeed = 5;
      saw3.rotationSpeed = 5;
      saw1.velocityX =- 20;
      saw2.velocityX = 20;
      saw3.velocityX = 20;
    //}
    
    //Saw warn {
      var sawWarn1 = createSprite(200,200);
      var sawWarn2 = createSprite(200,75);
      var sawWarn3 = createSprite(200,325);
      sawWarn1.setAnimation("warnSaw");
      sawWarn2.setAnimation("warnSaw");
      sawWarn3.setAnimation("warnSaw");
      sawWarn2.width =- 400;
      sawWarn3.width =- 400;
      sawWarn1.visible = false;
      sawWarn2.visible = false;
      sawWarn3.visible = false;
    // }
    
    //Lasers {
      var lasers = createGroup();
      for (var i = 0; i < 6; i++) {
        lasers.add(createSprite(500, 500));
      }
      lasers.setAnimationEach("laserCharge");
      lasers.setColliderEach("rectangle", 0, 0, 1, 800);
      var laserRepeat=1;
    //}
    
    //Flame {
      var flames=createGroup();
      var flame1 = createSprite(500, 200);
      var flame2 = createSprite(500, 200);
      flames.add(flame1);
      flames.add(flame2);
      flame1.visible = false;
      flame2.visible = false;
      flame1.setCollider("rectangle", 0, 0, 488, 2, 0);
      flame2.setCollider("rectangle", 0, 0, 488, 2, 0);
      var flameThrower=createSprite(200, 200);
      flameThrower.setAnimation("flameThrower");
      flameThrower.visible = false;
      flameThrower.setCollider("circle");
      var fireParticles=createGroup();
    //}
    
    //Cannons {
      var cannon1=createSprite(-25,0);
      cannon1.setAnimation("cannon");
      var cannon2=createSprite(425,0);
      cannon2.setAnimation("cannon");
      var cannon3=createSprite(-25,400);
      cannon3.setAnimation("cannon");
      var cannon4=createSprite(425,400);
      cannon4.setAnimation("cannon");
      cannon1.setCollider("circle",0,0,15);
      cannon2.setCollider("circle",0,0,15);
      cannon3.setCollider("circle",0,0,15);
      cannon4.setCollider("circle",0,0,15);
      var cannonDuration=0;
      
      var cannonParticles=createGroup();
    //}
    
    //Cannon Balls{
      var canBalls=createGroup();
      for (var i = 0; i < 8; i++) {
        canBalls.add(createSprite(500,500));
        canBalls[i].setSpeedAndDirection(4,0);
        canBalls[i].setCollider("rectangle",0,0,1,1);
      }
      canBalls.setAnimationEach("bullet");
      var ballGroup=1;
    //}
    
    //Explosions{
      var explosionDuration=0;
      var bigExplosion=createSprite(1000,200);
      bigExplosion.scale=1;
      var smallExplosion1=createSprite(1000,200);
      var smallExplosion2=createSprite(1000,200);
      var smallExplosion3=createSprite(1000,200);
      smallExplosion1.scale=0.6;
      smallExplosion2.scale=0.6;
      smallExplosion3.scale=0.6;
      smallExplosion1.setAnimation("explosionSmall");
      smallExplosion2.setAnimation("explosionSmall");
      smallExplosion3.setAnimation("explosionSmall");
      bigExplosion.setAnimation("explosionRadius");
      bigExplosion.setCollider("circle",0,0,60);
    //}
    
    //Big Lasers{
      var bigLaserDuration=0;
      
      var bigLasers=createGroup();
      var bigLaser1 = createSprite(800,180);
      bigLaser1.setAnimation("laserWarn");
      bigLaser1.setCollider("rectangle",0,0,15,400);
      bigLaser1.depth=1;
      var bigLaser2 = createSprite(800,180);
      bigLaser2.setAnimation("laserWarn");
      bigLaser2.setCollider("rectangle",0,0,15,400);
      bigLaser2.depth=1;
      var bigLaser3 = createSprite(800,180);
      bigLaser3.setAnimation("laserWarn");
      bigLaser3.setCollider("rectangle",0,0,15,400);
      bigLaser3.depth=1;
      var bigLaser4 = createSprite(800,180);
      bigLaser4.setAnimation("laserWarn");
      bigLaser4.setCollider("rectangle",0,0,15,400);
      bigLaser4.depth=1;
      bigLasers.add(bigLaser1);
      bigLasers.add(bigLaser2);
      bigLasers.add(bigLaser3);
      bigLasers.add(bigLaser4);
      
    //}
  //}
  
  //Adjusting camera & edges{
    camera.y=175;
    camera.x=200;
    
    camera.zoom=400/410;
    player.depth=1000;
    createEdgeSprites();
    topEdge.setAnimation("uiBackground");
    console.log(topEdge.width,topEdge.height);
    bottomEdge.height=150;
    rightEdge.height=550;
    leftEdge.height=550;
    
    bottomEdge.width=550;
    var backGround=createSprite(200,175);
    backGround.setAnimation("backdrop");
    backGround.depth=0;
  //}
  
  //Hearts {
    var heart1=createSprite(37, -2);
    var heart2=createSprite(67.25, -2);
    var heart3=createSprite(97.5, -2);
    heart1.setAnimation("heart");
    heart2.setAnimation("heart");
    heart3.setAnimation("heart");
  //}
  
  
  //menu {
    var option1=createSprite(-140,200);
    option1.setAnimation("box");
    option1.depth=0.1;
    var option2=createSprite(-260,200);
    option2.setAnimation("box");
    option2.depth=0.1;
    var option3=createSprite(-200,200);
    option3.setAnimation("box");
    option3.depth=0.1;
    var back=createSprite(-200,200);
    back.setAnimation("smolBox");
    back.depth=0.1;
    var name1=createSprite(-200,200,0,0);
    var name2=createSprite(-200,200,0,0);
    var menuStuff=createGroup();
    var leader1=createSprite(-200,200);
    var leader2=createSprite(-200,200);
    var leader3=createSprite(-200,200);
    var controlTimer=600;
    var controlText=createSprite(225,600);
    controlText.visible=false;
    leader1.setAnimation("beegBox");
    leader2.setAnimation("beegBox");
    leader3.setAnimation("beegBox");
    leader1.depth=0.1;
    leader2.depth=0.1;
    leader3.depth=0.1;
    menuStuff.add(option1);
    menuStuff.add(option2);
    menuStuff.add(option3);
    menuStuff.add(leader1);
    menuStuff.add(leader2);
    menuStuff.add(leader3);
    menuStuff.add(back);
    menuStuff.add(leftEdge);
    menuStuff.add(rightEdge);
    menuStuff.add(topEdge);
    menuStuff.add(bottomEdge);
    var section="start";
    var selection="play";
  //}
// }



//Functions and Stuff
function draw() {
  if(controlTimer>-60&&section=="main"&&mode=="menu"){
    controlTimer--;
    controlText.y=400+controlTimer;
  }
  else if(section!="main"||mode!="menu"){
    controlTimer=600;
    controlText.y=400+controlTimer;
  }
  if(storm==true){
    var stormA=Math.round(Math.abs(sin(World.frameCount)*0.1));
    background(rgb(stormA,stormA,stormA));
  }else{
    background("black");
  }
  if(computerSpeed=="med"||computerSpeed=="fast"){
    manageParticles();
  }
  if(cooldown>0){
    cooldown--;
  }
  if(computerSpeed=="fast"){
    if(World.frameRate<40){
      tester--;
    }else{
      tester=10;
    }
    if(tester<=0){
      computerSpeed="med";
      cooldown=30;
      tester=10;
      fireParticles.destroyEach();
    }
  }
  if(computerSpeed=="med"&&cooldown==0){
    if(World.frameRate<30){
      tester--;
    }else{
      tester=10;
    }
    if(tester<=0){
      computerSpeed="slow";
      playerParticles.destroyEach();
      fireParticles.destroyEach();
      cannonParticles.destroyEach();
    }
  }
  if(mode == "gameOver"){
    manageVisualsGameOver();
    if(keyWentDown("space")){
      resetFromGameOver();
    }
  }
  if(mode == "play"){
    if(invincibilityFrames<=0){
      score++;
    }
    attackCoolDown--;
    prehealth = health;
    invincibilityFrames--;
    playerControls();
    if(score/1000===Math.round(score/1000)&&selection==="hard"){
      storm=!storm;
    }
    if(attackCoolDown == 0){
      if(selection=="easy"){
        attackCoolDown = 120-Math.round(0.01*score);
        if(attackCoolDown<25){
          attackCoolDown=25;
        }
      }
      else if(selection=="hard"){
        if(storm==true){
          attackCoolDown=30;
        }
        if(storm==false){
          attackCoolDown=120;
        }
      }
      else if(selection=="medium"){
        attackCoolDown = 60;
      }
      newAttack();
    }
    edges.displace(player);
    //Laser management
    manageLaser();
    //Big Laser management
    manageBigLaser();
    //Fire management
    manageFire();
    //Saw management
    manageSaw();
    //Cannon manegement
    manageCannon();
    //Explosion manegement
    manageExplosion();

    
    
    if(health != prehealth){
      if(invincibilityFrames <= 0){
        health = prehealth - 1;
        invincibilityFrames = 150;
        if(health>0){
          playSound("assets/category_jump/retro_game_enemy_jump_5.mp3", false);
        }
      }else{
        health = prehealth;
      }
    }
    
    animateInvincibility();
    animateHearts();
    
    drawSprites();
    
  }
  if(mode == "menu"){
    menuControl();
  }
  if(mode=="transition"||mode=="menu"){
    menuAnimate();
  }
  if(storm==true){
    camera.x=200+sin(10*World.frameCount)+sin(10*World.frameCount);
    camera.y=175+sin(20*World.frameCount)+sin(20*World.frameCount);
  }else{
    camera.x=200;
    camera.y=175;
  }
  if(mode==="gameOver"||mode==="play"){
    
    textFont(longShotFont);
    fill("white");
    textAlign(LEFT, CENTER);
    textSize(24);
    text("Score: " + score, 130, 0);
    textAlign(CENTER,CENTER);
    textSize(20);
    if(selection=="easy"){
      text("EASY\nLOSING SANITY",330,0);
    }else if(selection=="hard"){
      text("HARD\nPURE NIGHTMARE",330,0);
    }
    else if(selection=="medium"){
      text("MEDIUM\nREVOLVING CHAOS",330,0);
    }
  }
}
//Functions {
  //Display
    function animateInvincibility() {
      if(invincibilityFrames > 0){
        if(invincibilityFrames>148&&invincibilityFrames<151){
          background(rgb(255,130,130));
          World.frameRate=10;
          if(health>0){
            heart1.setAnimation("heartBig");
          }
          if(health>1){
            heart2.setAnimation("heartBig");
          }
        }else{
          World.frameRate=60;
          if(invincibilityFrames<145){
            if(health>0){
              heart1.setAnimation("heart");
            }
            if(health>1){
              heart2.setAnimation("heart");
            }
          }
        }
        if(invincibilityFrames != 0 && invincibilityFrames/3 == Math.round(invincibilityFrames/3)){
          if(player.visible==true){
            player.visible=false;
          }else{
            player.visible=true;
          }
        }else {
          player.visible=true;
        }
      }
    }
    function animateHearts() {
      switch(health) {
        case 1:
          heart1.setAnimation("heart");
          heart2.setAnimation("heartEmpty");
          heart3.setAnimation("heartEmpty");
          player.setCollider("rectangle",0,0,12,12);
          playerSpeed=3.25;
          break;
        case 2:
          heart1.setAnimation("heart");
          heart2.setAnimation("heart");
          heart3.setAnimation("heartEmpty");
          player.setCollider("rectangle",0,0,20,20);
          playerSpeed=3;
          break;
        case 3:
          heart1.setAnimation("heart");
          heart2.setAnimation("heart");
          heart3.setAnimation("heart");
          player.setCollider("rectangle",0,0,20,20);
          playerSpeed=2.5;
          break;
        case 0:
          mode="gameOver";
          stopSound("-------------------------------------(1).mp3");
          stopSound("unowen-(1).mp3");
          stopSound("xi---Freedom-Dive----(Full)-(1).mp3");
          World.frameRate=0.5;
          storm=false;
          if(selection=="easy"){
            getKeyValue("losingSANITY",function(list){
              losingSANITY;
            });
          }
          if(selection=="hard"){
            getKeyValue("PURENIGHTMARE",function(list){
              PURENIGHTMARE=list;
            });
          }
          if(selection=="medium"){
            getKeyValue("revolvingCHAOS",function(list){
              revolvingCHAOS=list;
            });
          }
          background("crimson");
          player.visible=true;
          break;
        default:
          console.log("Unexpected: Health is "+health);
      }
    }
    function resetFromGameOver() {
      playSound("assets/Touhou-19-UDoALG-OST---Title-Screen---Intelligence-of-Beast.mp3",true);
      if(selection==="easy"){
        losingSANITY[10]=score;
        losingSANITY.sort();
        losingSANITY.shift();
        setKeyValue("losingSANITY",losingSANITY);
        setKeyValue("losingSANITY",losingSANITY);
  
      }
      else if(selection==="hard"){
        
        PURENIGHTMARE[10]=score;
        PURENIGHTMARE.sort();
        PURENIGHTMARE.shift();
        setKeyValue("PURENIGHTMARE",PURENIGHTMARE);
        setKeyValue("PURENIGHTMARE",PURENIGHTMARE);
      }
      else if(selection==="medium"){
        revolvingCHAOS[10]=score;
        revolvingCHAOS.sort();
        revolvingCHAOS.shift();
        setKeyValue("revolvingCHAOS",revolvingCHAOS);
        setKeyValue("revolvingCHAOS",revolvingCHAOS);
      }
      storm=false;
      sawWarn1.visible = false;
      sawWarn2.visible = false;
      sawWarn3.visible = false;
      saw1.x = 600;
      saw2.x = -200;
      saw3.x = -200;
      saw1.velocityX = -20;
      saw2.velocityX = 20;
      saw3.velocityX = 20;
      saw1.rotationSpeed = -5;
      saw2.rotationSpeed = 5;
      saw3.rotationSpeed = 5;
      sawDuration = 0;
      bigLaser1.play();
      bigLaser1.x=1000;
      bigLaser2.play();
      bigLaser2.x=1000;
      bigLaser3.play();
      bigLaser3.x=1000;
      bigLaser4.play();
      bigLaser4.x=1000;
      bigLaserDuration=0;
      lasers.setAnimationEach("laserCharge");
      for (var i = 0; i < lasers.length; i++) {
        lasers[i].x = 1000;
      }
      laserDuration = 0;
      laserRepeat=0;
      flameThrower.scale = 0.05;
      flameThrower.visible = false;
      flame1.x = 800;
      flame2.x = 800;
      flame1.setAnimation("fireLow");
      flame2.setAnimation("fireLow");
      fireDuration = 0;
      invincibilityFrames = 150;
      cannon1.x=-25;
      cannon1.y=0;
      cannon2.x=425;
      cannon2.y=0;
      cannon3.x=-25;
      cannon3.y=400;
      cannon4.x=425;
      cannon4.y=400;
      bigExplosion.x=1000;
      smallExplosion1.x=1000;
      smallExplosion2.x=1000;
      smallExplosion3.x=1000;
      explosionDuration=0;
      for(var i =0; i<8; i++){
        canBalls[i].x=500;
      }
      cannonDuration=0;
      health = 3;
      prehealth = 3;
      animateHearts();
      heart1.scale=1;
      heart2.scale=1;
      heart3.scale=1;
      dashMeter=298;
      invincibilityFrames=0;
      score = 0;
      transitionTimer=10;
      mode = "transition";
      section="start";
      selection="play";
    }
    function manageVisualsGameOver() {
      background("black");
      World.frameRate=60;
      player.visible=true;
      saw1.velocityX = 0;
      saw2.velocityX = 0;
      saw3.velocityX = 0;
      saw1.rotationSpeed = 0;
      saw2.rotationSpeed = 0;
      saw3.rotationSpeed = 0;
      bigLaser1.pause();
      bigLaser2.pause();
      bigLaser3.pause();
      bigLaser4.pause();
      canBalls.setVelocityEach(0,0);
      heart1.scale = 0.6;
      heart2.scale = 0.6;
      heart3.scale = 0.6;
      drawSprites();
      textFont(longShotFont);
      textAlign(CENTER, CENTER);
      stroke("black");
      strokeWeight(5);
      textSize(70);
      fill("white");
      text("Game Over", 200, 150);
      textSize(20);
      text("Just dodge!\nPress Space\nto continue", 200,220);
      noStroke();
    }
  //Attacks
    //Manage Attacks External
      function newAttack() {
        if(selection=="easy"){
          attack = randomNumber(1,2);
          if(score>3000){
            attack = randomNumber(1,3);
          }
          if(score>6000){
            attack=randomNumber(1,4);
          }
          if(score>9000){
            attack=randomNumber(1,5);
          }
          if(score>12000){
            attack=randomNumber(1,6);
          }
          if(levelUnlock==1&&score>=5000){
            levelUnlock=2;
            //setKeyValue(encodeURIComponent(getUserId())+"level",2);
          }
        }
        if(selection=="medium"){
          attack = randomNumber(1,5);
          if(levelUnlock==2&&score>=5000){
            levelUnlock=3;
            //setKeyValue(encodeURIComponent(getUserId())+"level",3);
          }
        }
        if(selection=="hard"){
          attack = randomNumber(1,5);
          if(storm==true){
            attack=randomNumber(1,6);
          }
        }

        if(dist(player.x,player.y,200,200)>244&&fireDuration>0&&selection=="hard"){
          attack = 4;
        }
        switch(attack) {
          case 1:
            if(cannonDuration==0){
              cannonDuration = 215;
            } else{
              attack=0;
            }
            break;
          case 2:
            if(laserDuration==0){
              laserDuration = 100;
              laserRepeat=randomNumber(0,1);
              if(randomNumber(0,1)==1){
                laserRepeat++;
              }
            }else{
              attack=0;
            }
            break;
          case 3:
            if(sawDuration==0){
              sawDuration = 130;
            }else{
              attack=0;
            }
            break;
          case 4:
            if(fireDuration==0&&bigLaserDuration==0){
              fireDuration = 250;
            }else{
              attack=0;
            }
            break;
          case 5:
            if(bigLaserDuration==0&&fireDuration==0){
              bigLaserDuration = 180;
            }else{
              attack=0;
            }
            break;
          case 6:
            if(explosionDuration==0){
              explosionDuration = 250;
            }else{
              attack=0;
            }
            break;
          default:
            console.log("Attack should not be "+attack);
        }
      }
    //Manage Attacks Internal
      function manageLaser() {
        if(laserDuration>0){
          laserDuration--;
          if(laserDuration>90&&laserDuration<100){
            if(laserDuration/2==Math.round(laserDuration/2)){
              lasers[49 - laserDuration/2].x = randomNumber(150, 250);
              lasers[49 - laserDuration/2].y = randomNumber(150, 250);
              lasers[49 - laserDuration/2].rotation = randomNumber(1, 180);
              if(49 - laserDuration/2>0){
                if(Math.abs(lasers[49 - laserDuration/2].rotation-lasers[49 - laserDuration/2-1].rotation)>30){
                  lasers[49 - laserDuration/2].rotation = randomNumber(1, 180);
                }
              }
              playSound("assets/010.wav", false);
            }
          }
          if(laserDuration==10){
            if(player.isTouching(lasers)){
              health--;
            }
          }
          if(laserDuration<20&&laserDuration>10){
            if(laserDuration/2==Math.round(laserDuration/2)){
              lasers[9-laserDuration/2].setAnimation("laserActive");
              playSound("assets/009.wav",false);
            }
          }
          if(laserDuration<10){
            if(laserDuration/2==Math.round(laserDuration/2)){
              lasers[4-laserDuration/2].setAnimation("laserCharge");
              lasers[4-laserDuration/2].x=1300;
            }
          }
          if(laserDuration===0&&laserRepeat>0){
            laserDuration=110;
            laserRepeat--;
          }
        }
      }
      function manageBigLaser() {
        if(bigLaserDuration>0){
          bigLaserDuration--;
        }
        if(bigLaserDuration===175){
          bigLaser1.x=randomNumber(25,85);
          bigLaser2.x=randomNumber(115,185);
          bigLaser3.x=randomNumber(215,285);
          bigLaser4.x=randomNumber(315,375);
          bigLasers.setAnimationEach("laserWarn");
           playSound("emotion_alart.wav");
        }
        if(bigLaserDuration>10&&bigLaserDuration<100){
          bigLasers.setAnimationEach("bigLaser");
           playSound("flandre_heavyshot-(mp3cut.net).wav");
          if(player.isTouching(bigLasers)){
            health--;
          }
        }
        if(bigLaserDuration===10){
          bigLaser1.x=1000;
          bigLaser2.x=1000;
          bigLaser3.x=1000;
          bigLaser4.x=1000;
        }
      }
      function manageFire() {
        flameThrower.visible = false;
        flame1.visible=false;
        flame2.visible=false;
        if(fireDuration>0){
          fireDuration--;
          flameThrower.visible=true;
          flame1.rotation=flameThrower.rotation;
          flame2.rotation=flameThrower.rotation+90;
          flame1.x=200;
          flame2.x=200;
          if(fireDuration>229){
            flameThrower.scale=(250-fireDuration)*0.05;
             
          }
          if(fireDuration==229){
            flame1.setAnimation("fireLow");
            flame2.setAnimation("fireLow");
          }
          if(fireDuration<225){
            flame1.visible=true;
            flame2.visible=true;
          }
          if(fireDuration==170){
            flame1.setAnimation("fireOn");
            flame2.setAnimation("fireOn");
             playSound("assets/nep00.mp3");
          }
          if(fireDuration<170&&fireDuration>30){
            if(player.isTouching(flame1)){
              health--;
            }
            if(player.isTouching(flame2)){
              health--;
            }
          }
          if(fireDuration<=140&&fireDuration>50){
            flameThrower.rotation=flameThrower.rotation+1;
          }
          if(fireDuration==30){
            flame1.setAnimation("fireLow");
            flame2.setAnimation("fireLow");
             stopSound("assets/nep00.mp3");
          }
          if(fireDuration<=20){
            flame1.x=800;
            flame2.x=800;
            flameThrower.scale=fireDuration*0.05;
          }
          //flameThrower.displace(player);
        } else {
          flameThrower.rotation=0;
        }
      }
      function manageSaw() {
        sawWarn1.visible=false;
        sawWarn2.visible=false;
        sawWarn3.visible=false;
        if(sawDuration>0){
          sawDuration--;
          if(sawDuration>70){
            saw1.x=600;
            sawWarn1.visible=true;
          }
          if(sawDuration==70){
            playSound("assets/category_movement/puzzle_game_shift_paper_02.mp3", false);
          }
          if(sawDuration>30){
            saw2.x=-200;
            saw3.x=-200;
            if(sawDuration<100){
            sawWarn2.visible=true;
            sawWarn3.visible=true;
            }
            
          }
          if(sawDuration==30){
            playSound("assets/category_movement/puzzle_game_shift_paper_02.mp3", false);
          }
          if(sawDuration==28){
            playSound("assets/category_movement/puzzle_game_shift_paper_02.mp3", false);
          }
        }else{
          saw1.x=600;
          saw2.x=-200;
          saw3.x=-200;
        }
        if(player.isTouching(saw1)){
          health--;
        }
        if(player.isTouching(saw2)){
          health--;
        }
        if(player.isTouching(saw3)){
          health--;
        }
      }
      function manageCannon(){
        if(cannonDuration>0){
        if(cannonDuration==150){
          ballGroup++;
        }
        if(ballGroup==3){
          ballGroup=1;
        }
        if(selection=="easy"){
          if(ballGroup==2&&score<4500){
            ballGroup=1;
          }
        }
        cannonDuration--;
        cannon1.pointTo(player.x,player.y);
        cannon1.rotation=cannon1.rotation-45;
        cannon2.pointTo(player.x,player.y);
        cannon2.rotation=cannon2.rotation-45;
        cannon3.pointTo(player.x,player.y);
        cannon3.rotation=cannon3.rotation-45;
        cannon4.pointTo(player.x,player.y);
        cannon4.rotation=cannon4.rotation-45;
        if(cannonDuration>174){
          cannon1.x++;
          cannon1.y++;
          cannon2.x--;
          cannon2.y++;
          cannon3.x++;
          cannon3.y--;
          cannon4.x--;
          cannon4.y--;
        }
        if(cannonDuration>120){
        if(ballGroup==1){
          canBalls[0].x=cannon1.x;
          canBalls[0].y=cannon1.y;
          canBalls[0].rotation=cannon1.rotation+45;
          canBalls[0].setSpeedAndDirection(4,cannon1.rotation+45);
          canBalls[1].x=cannon2.x;
          canBalls[1].y=cannon2.y;
          canBalls[1].rotation=cannon2.rotation+45;
          canBalls[1].setSpeedAndDirection(4,cannon2.rotation+45);
          canBalls[2].x=cannon3.x;
          canBalls[2].y=cannon3.y;
          canBalls[2].rotation=cannon3.rotation+45;
          canBalls[2].setSpeedAndDirection(4,cannon3.rotation+45);
          canBalls[3].x=cannon4.x;
          canBalls[3].y=cannon4.y;
          canBalls[3].rotation=cannon4.rotation+45;
          canBalls[3].setSpeedAndDirection(4,cannon4.rotation+45);
        }
        if(ballGroup==2){
          canBalls[4].x=cannon1.x;
          canBalls[4].y=cannon1.y;
          canBalls[4].rotation=cannon1.rotation+45;
          canBalls[4].setSpeedAndDirection(4,cannon1.rotation+45);
          canBalls[5].x=cannon2.x;
          canBalls[5].y=cannon2.y;
          canBalls[5].rotation=cannon2.rotation+45;
          canBalls[5].setSpeedAndDirection(4,cannon2.rotation+45);
          canBalls[6].x=cannon3.x;
          canBalls[6].y=cannon3.y;
          canBalls[6].rotation=cannon3.rotation+45;
          canBalls[6].setSpeedAndDirection(4,cannon3.rotation+45);
          canBalls[7].x=cannon4.x;
          canBalls[7].y=cannon4.y;
          canBalls[7].rotation=cannon4.rotation+45;
          canBalls[7].setSpeedAndDirection(4,cannon4.rotation+45);
        }
        }
        if(cannonDuration<40){
          cannon1.x--;
          cannon1.y--;
          cannon2.x++;
          cannon2.y--;
          cannon3.x--;
          cannon3.y++;
          cannon4.x++;
          cannon4.y++;
        }
        }
        cannon1.displace(player);
        cannon2.displace(player);
        cannon3.displace(player);
        cannon4.displace(player);
        if(player.isTouching(canBalls)){
          health--;
        }
      }
      function manageExplosion() {
        if(explosionDuration>0){
          explosionDuration--;
          if(explosionDuration===149){
            bigExplosion.depth=0;
            bigExplosion.x=randomNumber(130,270);
            bigExplosion.y=randomNumber(130,270);
            bigExplosion.setAnimation("explosionRadius");
            }
          else if(explosionDuration===50){
            bigExplosion.setAnimation("explosion");
            playSound("assets/explode_000.wav");
            bigExplosion.depth=smallExplosion1.depth-0.5;
          }
          if(explosionDuration<50&&explosionDuration>10){
            if(player.isTouching(bigExplosion)){
              health--;
            }
            if(explosionDuration===45){
              smallExplosion1.setFrame(1);
              smallExplosion1.x=randomNumber(bigExplosion.x-30,bigExplosion.x+30);
              smallExplosion1.y=randomNumber(bigExplosion.y-30,bigExplosion.y+30);
            }
            if(explosionDuration===40){
              smallExplosion3.setFrame(1);
              smallExplosion3.x=randomNumber(bigExplosion.x-30,bigExplosion.x+30);
              smallExplosion3.y=randomNumber(bigExplosion.y-30,bigExplosion.y+30);
            }
            if(explosionDuration===35){
              smallExplosion3.setFrame(1);
              smallExplosion1.x=randomNumber(bigExplosion.x-30,bigExplosion.x+30);
              smallExplosion1.y=randomNumber(bigExplosion.y-30,bigExplosion.y+30);
            }
            if(explosionDuration===30){
              smallExplosion1.setFrame(1);
              smallExplosion2.x=randomNumber(bigExplosion.x-30,bigExplosion.x+30);
              smallExplosion2.y=randomNumber(bigExplosion.y-30,bigExplosion.y+30);
            }
            if(explosionDuration===25){
              smallExplosion3.x=1000;
            }
            if(explosionDuration===20){
              smallExplosion2.x=1000;
            }
            if(explosionDuration===15){
              smallExplosion1.x=1000;
            }
          }
          if(explosionDuration<10){
            bigExplosion.scale-=0.099;
          }
          if(explosionDuration===0){
            bigExplosion.x=1000;
            bigExplosion.scale=1;
          }
        }
      }
    //Menu Things
      function menuControl(){
        if(keyWentDown("space")){
          controltimer=600;
          if(selection=="medium"){
            if(levelUnlock>=2){
              mode="transition";
              transitionTimer=45;
              playSound("assets/ok00.mp3", false);
            }
            else{
              playSound("assets/se_invalid.wav", false);
            }
          }
          else if(selection=="hard"){
            if(levelUnlock==3){
              mode="transition";
              transitionTimer=45;
              playSound("assets/ok00.mp3", false);
            }
            else{
              playSound("assets/se_invalid.wav", false);
            }
          }
          else{
            mode="transition";
            transitionTimer=45;
          if(selection!="back"){
            playSound("assets/ok00.mp3", false);
          }else{
            playSound("assets/cancel00.mp3", false);
          }
          }
          
        }
        if(mode==="menu"){
          if(section==="main"){
            option1.x=140;
            option1.y=250;
            option2.x=260;
            option2.y=250;
            option3.x=50;
            option3.y=355;
          }
          if(section==="difficulty"){
            option1.x=90;
            option1.y=200;
            option2.x=200;
            option2.y=190;
            option3.x=310;
            option3.y=200;
            back.x=50;
            back.y=355;
          }
          if(section==="leaderboard"||section==="?"){
            leader1.x=70;
            leader2.x=200;
            leader3.x=330;
            leader1.y=200;
            leader2.y=192;
            leader3.y=200;
            back.x=50;
            back.y=355;
          }
        }
         if((keyWentDown("w")||keyWentDown("s")||keyWentDown("a")||keyWentDown("d")) || (keyWentDown("up") || (keyWentDown("down") || (keyWentDown("left") || keyWentDown("right"))))){
          controlTimer=600;
          var noise=randomNumber(1,3);
          stopSound("assets/select00.mp3");
          stopSound("assets/select00.mp3");
          stopSound("assets/select00.mp3");
          playSound("assets/select00.mp3");
          if(section==="main"){
            if(selection==="play"){
           if(keyWentDown("w") || keyWentDown("up")){
                option1.y=245;
              }
              if(keyWentDown("s") || keyWentDown("down")){
                option1.y=255;
                selection="?";
              }
              if(keyWentDown("a") || keyWentDown("left")){
                option1.x=135;
                selection="?";
              }
              if(keyWentDown("d") || keyWentDown("right")){
                option1.x=145;
                selection="leaderboard";
              }
            }
            else if((selection==="leaderboard")){
              if(keyWentDown("w") || keyWentDown("up")){
                option2.y=245;
              }
              if(keyWentDown("s") || keyWentDown("down")){
                option2.y=255;
                selection="?";
              }
              if(keyWentDown("a") || keyWentDown("left")){
                option2.x=255;
                selection="play";
              }
              if(keyWentDown("d") || keyWentDown("right")){
                option2.x=265;
              }
            }
            else if((selection==="?")){
              if(keyWentDown("w") || keyWentDown("up")){
                option3.y-=5;
                selection="play";
              }
              if(keyWentDown("s") || keyWentDown("down")){
                option3.y+=5;
                
              }
              if(keyWentDown("a") || keyWentDown("left")){
                option3.x-=5;
              }
              if(keyWentDown("d") || keyWentDown("right")){
                option3.x+=5;
                selection="play";
              }
            }
          }
          else if((section==="difficulty")){
            if(keyWentDown("s") || keyWentDown("down")){
              if(selection=="easy"){
                option1.y+=5;
              }
              if(selection=="medium"){
                option2.y+=5;
              }
              if(selection=="hard"){
                option3.y+=5;
              }
              if(selection=="back"){
                back.y+=5;
              }
              selection="back";
            }
            if(selection==="back"){
              if(keyWentDown("a") || keyWentDown("left")){
                back.x-=5;
              }
              if(keyWentDown("d") || keyWentDown("right")){
                back.x+=5;
                selection="hard";
              }
              if(keyWentDown("w") || keyWentDown("up")){
                back.y-=5;
                selection="easy";
              }
            }
            else if((selection==="easy")){
              if(keyWentDown("a") || keyWentDown("left")){
                option1.x-=5;
                selection="hard";
              }
              if(keyWentDown("w") || keyWentDown("up")){
                option1.y-=5;
              }
              if(keyWentDown("d") || keyWentDown("right")){
                option1.x+=5;
                selection="medium";
              }
            }
            else if((selection==="medium")){
              if(keyWentDown("a") || keyWentDown("left")){
                selection="easy";
                option2.x-=5;
              }
              if(keyWentDown("w") || keyWentDown("up")){
                option2.y-=5;
              }
              if(keyWentDown("d") || keyWentDown("right")){
                selection="hard";
                option2.x+=5;
              }
            }
            else if((selection==="hard")){
              if(keyWentDown("a") || keyWentDown("left")){
                selection="medium";
                option3.x-=5;
              }
              if(keyWentDown("w") || keyWentDown("up")){
                option3.y-=5;
              }
              if(keyWentDown("d") || keyWentDown("right")){
                selection="easy";
                option3.x+=5;
              }
            }
            
          }
          else if(section==="leaderboard"||section==="?"){
            if(keyWentDown("w") || keyWentDown("up")){
              back.y-=5;
            }
            if(keyWentDown("s") || keyWentDown("down")){
              back.y+=5;
            }
            if(keyWentDown("a") || keyWentDown("left")){
              back.x-=5;
            }
            if(keyWentDown("d") || keyWentDown("right")){
              back.x+=5;
            }
          }
        }
            else if(section==="leaderboard"||section==="?"){
            if(keyWentDown("w") || keyWentDown("up")){
              back.y-=5;
            }
            if(keyWentDown("s") || keyWentDown("down")){
              back.y+=5;
            }
            if(keyWentDown("a") || keyWentDown("left")){
              back.x-=5;
            }
            if(keyWentDown("d") || keyWentDown("right")){
              back.x+=5;
            }
          }
        }       
      function menuAnimate(){
     background("black");
        drawSprites();
        textAlign(CENTER,CENTER);
        fill("white");
        noStroke();
        textFont(longShotFont);
        textSize(20);
        back.setAnimation("smolBox");
        option1.setAnimation("box");
        option2.setAnimation("box");
        option3.setAnimation("box");
        option1.y+=3*sin(World.frameCount*2);
        option2.y+=3*cos(World.frameCount*2);
        option3.y+=3*-sin(World.frameCount*2);
        option1.x+=3*cos(World.frameCount*3);
        option2.x+=3*-sin(World.frameCount*3);
        option3.x+=3*-cos(World.frameCount*3);
        back.y+=3*-cos(World.frameCount*2);
        back.x+=3*sin(World.frameCount*3);
        if(section=="main"){
          option3.setAnimation("smolBox");
        }
        if(selection=="back"){
          back.setAnimation("smallBoxGlow_rainbow");
        }
        if(section==="main"){
          if(mode=="menu"){
            name1.x=170+Math.round(sin(World.frameCount*5))*3+Math.round(cos(World.frameCount*10))*4;
            name1.y=100+Math.round(sin(World.frameCount*10))*3+Math.round(cos(World.frameCount*5))*4;
            name2.x=230-Math.round(sin(World.frameCount*5))*3+Math.round(cos(World.frameCount*10))*4;
            name2.y=160-Math.round(sin(World.frameCount*10))*3+Math.round(cos(World.frameCount*5))*4;
          }
          
          text("GAMEMODES",option1.x,option1.y);
          text("LEADER\nBOARD",option2.x,option2.y);
          text("GUIDE",option3.x,option3.y);
          textSize(50);
          text("B R U T A L",name1.x,name1.y);
          text("M A Y H E M",name2.x,name2.y);
            if(mode=="menu"){
            textSize(12);
            text("By: Tejas Garikapati",350,100+2*sin(World.frameCount));
            textSize(13);
            text("TAVG PRODUCTIONS\n-SONG-\n	Touhou-19 UDoALG",200,345+3*sin(World.frameCount*5))*3+Math.round(cos(World.frameCount*10))*4;
          }
          if(selection=="play"){
            option1.setAnimation("boxGlow_blue");
          }
          else if(selection=="leaderboard"){
            option2.setAnimation("boxGlow_blue");
          }
          else if(selection=="?"){
            option3.setAnimation("smallBoxGlow_rainbow");
          }
        }
        if(section==="difficulty"){
          backGround.setAnimation("backdrop_difficulty");
          text("LOSING\nSANITY",option1.x,option1.y);
          text("PURE\nNIGHTMARE",option3.x,option3.y);
          text("REVOLVING\nCHAOS",option2.x,option2.y);
          textSize("15");
          text("BACKGROUND - TOUHOU PERFECT CHERRY BLOSSOM",200,345+3*sin(World.frameCount*10))*3+Math.round(cos(World.frameCount*5))*3;

          
          if(levelUnlock<2){
            option2.setAnimation("boxLock_medium");
          }
          if(levelUnlock<3){
            option3.setAnimation("boxLock_hard");
          }
          if(selection=="easy"){
            option1.setAnimation("boxGlow_easy");
            if(mode=="menu"){
              text("MODE - EASY\nLOSING SANITY\nSURVIVE AS THE WORLD SLOWLY GROWS MORE CHAOTIC\nMUSIC - Genso No White Traveler - By ZUN",200,80);
            }
          }
          else if(selection=="hard"){
                option3.setAnimation("boxGlow_hard");
            if(mode=="menu"){
              text("MODE - HARD-LUNATIC\nPURE NIGHTMARE\nSURVIVE WAVES OF EXTREMEDY IN BETWEEN BREAK PERIODS\nMUSIC - ??? - By ???",200,80);
            }
            if(levelUnlock>=3){
              option3.setAnimation("boxGlow_hard");
            }
            else{
              option3.setAnimation("boxGlowLock_hard");
              text("UNLOCK BY REACHING A SCORE OF 5 OOO IN REVOLVING CHAOS",200,280);
            }
            
          }
          else if(selection=="medium"){
                option2.setAnimation("boxGlow_medium");
            if(mode=="menu"){
              text("MODE - MEDIUM \nREVOLVING CHAOS\nA LONG STRUGGLE TO SURVIVE WITH CONSTANT ANARCHY\nMUSIC - UN OWEN WAS HER? - BY ZUN AND BEAT MARIO",200,80);
            }
            if(levelUnlock>=2){
              option2.setAnimation("boxGlow_medium");
            }
            else{
              option2.setAnimation("boxGlowLock_medium");
              text("UNLOCK BY REACHING A SCORE OF 5 OOO IN LOSING SANITY",200,280);
              
            }
          }
          
        }
        if(section==="leaderboard"){
          textSize(15);
          leader1.setAnimation("beegBox");
          leader2.setAnimation("beegBox");
          leader3.setAnimation("beegBox");
          leader1.y+=3*sin(World.frameCount*4);
          leader2.y+=3*cos(World.frameCount*4);
          leader3.y+=3*sin(-World.frameCount*4);
          text("HIGHEST SCORE - 11995",200,350+3*sin(World.frameCount*4))*3+Math.round(cos(World.frameCount*5))*3;

          if(losingSANITY!=null&&losingSANITY!=undefined){
            text("LOSING\nSANITY\n"+losingSANITY[9]+"\n"+losingSANITY[8]+"\n"+losingSANITY[7]+"\n"+losingSANITY[6]+"\n"+losingSANITY[5]+"\n"+losingSANITY[4]+"\n"+losingSANITY[3]+"\n"+losingSANITY[2]+"\n"+losingSANITY[1]+"\n"+losingSANITY[0],leader1.x,leader1.y);
          }
          if(PURENIGHTMARE!=null&&PURENIGHTMARE!=undefined){
            text("PURE\nNIGHTMARE\n"+PURENIGHTMARE[9]+"\n"+PURENIGHTMARE[8]+"\n"+PURENIGHTMARE[7]+"\n"+PURENIGHTMARE[6]+"\n"+PURENIGHTMARE[5]+"\n"+PURENIGHTMARE[4]+"\n"+PURENIGHTMARE[3]+"\n"+PURENIGHTMARE[2]+"\n"+PURENIGHTMARE[1]+"\n"+PURENIGHTMARE[0],leader3.x,leader3.y);
          }
          if(revolvingCHAOS!=null&&revolvingCHAOS!=undefined){
            text("REVOLVING\nCHAOS\n"+revolvingCHAOS[9]+"\n"+revolvingCHAOS[8]+"\n"+revolvingCHAOS[7]+"\n"+revolvingCHAOS[6]+"\n"+revolvingCHAOS[5]+"\n"+revolvingCHAOS[4]+"\n"+revolvingCHAOS[3]+"\n"+revolvingCHAOS[2]+"\n"+revolvingCHAOS[1]+"\n"+revolvingCHAOS[0],leader2.x,leader2.y);
          }
        }
        if(section==="?"){
          textSize(16);
          leader1.setAnimation("help1");
          leader2.setAnimation("help2");
          leader3.setAnimation("help3");
          leader1.y+=3*sin(World.frameCount*4);
          leader2.y+=3*cos(World.frameCount*4);
          leader3.y+=3*sin(-World.frameCount*4);
          text("THE GOAL OF THIS\nGAME IS SIMPLE-\nSURVIVE !\n\AVOID OBSTACLES\nTHAT ARE RANDOMLY\nPLACED TO TRY\nAND STOP YOU\n\n\n",leader1.x,leader1.y);
          text("THE LONGER YOU\nSURVIVE-\nTHE BETTER !\nYOUR SCORE\nIS DETERMINED\nBY HOW LONG\nYOU LAST\nIN ONE ROUND\n\n\n",leader2.x,leader2.y);
          text("USE THE ARROW KEYS\nTO MOVE YOUR\nPLAYER AROUND\n\nPRESSING SPACE\nMAKES YOU\nDO A DASH\nTURNING YOU\nINVINCIBLE\n\n",leader3.x,leader3.y);
          text("GAMEPLAY GUIDE",200,350+3*sin(World.frameCount*4))*3+Math.round(cos(World.frameCount*5))*3;

        }
        textSize(15);
        text("BACK",back.x,back.y);
        drawSprites(menuStuff);
        drawSprites(edges);
        if(mode=="transition"){
          transition();
          backGround.setAnimation("backdrop");



        }
      }
      function transition(){
        if(transitionTimer>0){
          if(section=="main"){
            option1.x=140;
            option2.x=260;
            option1.y=470-transitionTimer*5;
            option2.y=470-transitionTimer*5;
            option3.x=-85+transitionTimer*3;
            option3.y=355;
            name1.y=100;
            name2.y=160;
            name1.x=-280+transitionTimer*10;
            name2.x=680-transitionTimer*10;
            back.x=-200;
          }
          else if(section=="leaderboard"||section=="?"){
            option1.x=-200;
            option2.x=-200;
            option3.x=-200;
            leader1.y=200;
            leader2.x=200;
            leader3.y=200;
            leader1.x=-155+transitionTimer*5;
            leader2.y=-160+transitionTimer*8;
            leader3.x=555-transitionTimer*5;
            back.x=50;
            back.y=400-transitionTimer;
          }
          else if(section=="difficulty"){
            option1.y=200;
            option2.x=200;
            option3.y=200;
            option1.x=-130+transitionTimer*5;
            option2.y=-30+transitionTimer*5;
            option3.x=530-transitionTimer*5;
            back.x=50;
            back.y=400-transitionTimer;
          }
        }
        else if(transitionTimer<0){
          if(section=="main"){
            option1.x=140;
            option2.x=260;
            option1.y=470+transitionTimer*5;
            option2.y=470+transitionTimer*5;
            option3.x=-126-transitionTimer*4;
            option3.y=355;
            name1.y=100;
            name2.y=160;
            name1.x=-280-transitionTimer*10;
            name2.x=680+transitionTimer*10;
            back.x=-200;
          }
          else if(section=="leaderboard"||section=="?"){
            option1.x=-200;
            option2.x=-200;
            option3.x=-200;
            leader1.y=200;
            leader2.x=200;
            leader3.y=200;
            leader1.x=-155-transitionTimer*5;
            leader2.y=-160-transitionTimer*8;
            leader3.x=555+transitionTimer*5;
            back.x=50;
            back.y=400+transitionTimer;
          }
          else if(section=="difficulty"){
            option1.y=200;
            option2.x=200;
            option3.y=200;
            option1.x=-130-transitionTimer*5;
            option2.y=-30-transitionTimer*5;
            option3.x=530+transitionTimer*5;
            back.x=50;
            back.y=400+transitionTimer;
          }
        }
        else if(transitionTimer==0){
          menuChange();
        }
        transitionTimer--;
        if(transitionTimer==-45){
          mode="menu";
          transitionTimer=0;
          if(start===true){
            playSound("assets/Touhou-19-UDoALG-OST---Title-Screen---Intelligence-of-Beast.mp3",true);
            start=false;
          }
        }
      }
      function menuChange(){
        if(section=="main"){
          if(selection=="play"){
            section="difficulty";
            selection="easy";
          }
          else if(selection=="leaderboard"){
            section="leaderboard";
            
            selection="back";
            getKeyValue("losingSANITY",function(list){
              losingSANITY=list;
            });
            getKeyValue("PURENIGHTMARE",function(list){
              PURENIGHTMARE=list;
            });
            getKeyValue("revolvingCHAOS",function(list){
              revolvingCHAOS=list;
            });
          }
          else if(selection=="?"){
            section="?";
            selection="back";
          }
        }
        else if(section=="leaderboard"){
          section="main";
          selection="leaderboard";
        }
        else if(section=="?"){
          section="main";
          selection="?";
        }
        else if(section=="difficulty"){
          if(selection=="back"){
            section="main";
            selection="play";
          }
          if(selection==="easy"){
             section="main";
             mode="play";
             stopSound("assets/Touhou-19-UDoALG-OST---Title-Screen---Intelligence-of-Beast.mp3");
             playSound("-------------------------------------(1).mp3", true);
                 var backGround=createSprite(200,175);
                 backGround.setAnimation("backdrop_easy");
                 backGround.depth=0;
          }
          else if (selection==="medium"){
             mode="play";
             stopSound("assets/Touhou-19-UDoALG-OST---Title-Screen---Intelligence-of-Beast.mp3");
             playSound("unowen-(1).mp3", true);
                var backGround=createSprite(200,175);
                backGround.setAnimation("backdrop_medium");
                backGround.depth=0;
          }
          else if (selection==="hard"){
            mode="play";
            stopSound("assets/Touhou-19-UDoALG-OST---Title-Screen---Intelligence-of-Beast.mp3", true);
            playSound("xi---Freedom-Dive----(Full)-(1).mp3", true);
                 var backGround=createSprite(200,175);
                 backGround.setAnimation("backdrop_hard");
                 backGround.depth=0;
          }
        }
        else if(section=="start"){
          section="main";
        }
      }
      
    //Others
      function playerControls() {
        var direction;
        if(dashMeter<300){
          dashMeter++;
        }
        if(keyDown("up")||keyDown("w")){
          player.y=player.y-playerSpeed; 
          direction = "up"; 
        }
        if(keyDown("down")||keyDown("s")){ 
          player.y=player.y+playerSpeed; 
          direction = "down";
        }
        if(keyDown("left")||keyDown("a")){ 
          player.x=player.x-playerSpeed; 
          direction = "left";
        }
        if(keyDown("right")||keyDown("d")){
          player.x=player.x+playerSpeed; 
          direction = "right"; 
        } 
        if(dashMeter===300){
          player.setAnimation("playerFlash"+prehealth);
        }else if(dashMeter>0){
          player.setAnimation("player"+prehealth);
        }
        else{
          player.setAnimation("playerBright"+prehealth);
          player.tint=rgb(Math.abs(dashMeter*50),Math.abs(dashMeter*50),Math.abs(dashMeter*50));
        }
        if(keyWentDown("space")&&dashMeter===300&&invincibilityFrames<1){
          dashMeter=-15;
          
          dashDirection="";
          if(keyDown("up")||keyDown("w")){
            dashDirection="u";
          }
          else if(keyDown("down")||keyDown("s")){
            dashDirection="d";
          }
          if(keyDown("left")||keyDown("a")){
            dashDirection=dashDirection+"l";
          }
          else if(keyDown("right")||keyDown("d")){
            dashDirection=dashDirection+"r";
          }
          if(dashDirection==""){
            dashMeter=300;
          }
          else {
            invincibilityFrames=45;
          }
        }
        if (dashMeter<0){
          
          if(dashDirection.length==1){
            if (dashDirection=="u") { 
              player.y=player.y-playerSpeed*2.5;
            } 
            if (dashDirection=="d") { 
              player.y=player.y+playerSpeed*2.5;
            } 
            if (dashDirection=="l") { 
              player.x=player.x-playerSpeed*2.5;
            } 
            if (dashDirection=="r") {
              player.x=player.x+playerSpeed*2.5;
            }
          }else{
            if(dashDirection=="ul"){
              player.x=player.x-playerSpeed*2.5;
              player.y=player.y-playerSpeed*2.5;
            }
            else if(dashDirection=="ur"){
              player.x=player.x+playerSpeed*2.5;
              player.y=player.y-playerSpeed*2.5;
            }
            else if(dashDirection=="dl"){
              player.x=player.x-playerSpeed*2.5;
              player.y=player.y+playerSpeed*2.5;
            }
            else if(dashDirection=="dr"){
              player.x=player.x+playerSpeed*2.5;
              player.y=player.y+playerSpeed*2.5;
            }
          }
        }
      } 
      
      function manageParticles(){
        //player{
          if(World.frameCount/(6/prehealth)===Math.round(World.frameCount/(6/prehealth))&&invincibilityFrames<1){
            playerParticles.add(createSprite(player.x+randomNumber(-4,4),player.y+randomNumber(-4,4)));
            playerParticles[playerParticles.length-1].setAnimation("fireParticle");
            playerParticles[playerParticles.length-1].depth=1;
            playerParticles[playerParticles.length-1].rotation=randomNumber(0,3)*90;
            playerParticles[playerParticles.length-1].scale=randomNumber(300,500)/200;
          }
          for(var i=0;i<playerParticles.length;i++){
            playerParticles[i].scale*=0.92;
            playerParticles[i].rotation=playerParticles[i].rotation+randomNumber(-1,1)*90;
            playerParticles[i].setSpeedAndDirection(playerParticles[i].scale/6*((prehealth-1)*3+1),playerParticles[i.rotation]);
            if(playerParticles[i].scale<0.8){
              playerParticles[i].destroy();
              i--;
            }
          }
        //}
        //bullets{
        if(World.frameCount/10===Math.round(World.frameCount/10)){
          for(var j=0;j<canBalls.length;j++){
            if(dist(canBalls[j].x,canBalls[j].y,200,200)<300){
            cannonParticles.add(createSprite(canBalls[j].x,canBalls[j].y));
            cannonParticles[cannonParticles.length-1].setAnimation("darkParticle");
            cannonParticles[cannonParticles.length-1].depth=1;
            cannonParticles[cannonParticles.length-1].scale=1.5;
            cannonParticles[cannonParticles.length-1].setSpeedAndDirection(dist(0,0,canBalls[j].velocityX,canBalls[j].velocityY)/3,canBalls[j].rotation);
            }
          }
          for(var k=0;k<cannonParticles.length;k++){
            cannonParticles[k].scale*=0.65;
            if(cannonParticles[k].scale<0.3){
              cannonParticles[k].destroy();
              k--;
            }
          }
        }

        //}
        //fire{
          if(fireDuration<170&&fireDuration>30&&computerSpeed=="fast"){
            if(World.frameCount/8===Math.round(World.frameCount/8)){
              fireParticles.add(createSprite(200,200));
              fireParticles[fireParticles.length-1].setAnimation("fireParticle");
              fireParticles[fireParticles.length-1].setSpeedAndDirection(randomNumber(4,6),flameThrower.rotation+randomNumber(-5,5));
              fireParticles[fireParticles.length-1].scale=randomNumber(200,250)/50;
              fireParticles[fireParticles.length-1].depth=1;
            }
            else if((World.frameCount+2)/8===Math.round((World.frameCount+2)/8)){
              fireParticles.add(createSprite(200,200));
              fireParticles[fireParticles.length-1].setAnimation("fireParticle");
              fireParticles[fireParticles.length-1].setSpeedAndDirection(randomNumber(4,6),flameThrower.rotation+randomNumber(-95,-85));
              fireParticles[fireParticles.length-1].scale=randomNumber(200,250)/50;
              fireParticles[fireParticles.length-1].depth=1;
            }
            else if((World.frameCount+4)/8===Math.round((World.frameCount+4)/8)){
              fireParticles.add(createSprite(200,200));
              fireParticles[fireParticles.length-1].setAnimation("fireParticle");
              fireParticles[fireParticles.length-1].setSpeedAndDirection(randomNumber(4,6),flameThrower.rotation+randomNumber(-185,-175));
              fireParticles[fireParticles.length-1].scale=randomNumber(200,250)/50;
              fireParticles[fireParticles.length-1].depth=1;
            }
            else if((World.frameCount+6)/8===Math.round((World.frameCount+6)/8)){
              fireParticles.add(createSprite(200,200));
              fireParticles[fireParticles.length-1].setAnimation("fireParticle");
              fireParticles[fireParticles.length-1].setSpeedAndDirection(randomNumber(4,6),flameThrower.rotation+randomNumber(85,95));
              fireParticles[fireParticles.length-1].scale=randomNumber(200,250)/50;
              fireParticles[fireParticles.length-1].depth=1;
            }
          }
          for(var l=0;l<fireParticles.length;l++){
            fireParticles[l].scale*=0.92;
            if(fireParticles[l].scale<0.7){
              fireParticles[l].destroy();
            }
          }
        //}
      }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
