const mineflayer = require('mineflayer')
const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()

let token = config.token
let sending = false
let chatData= []

const bot = mineflayer.createBot({
  host: `${config.serverip}`,
  username: `${config.email}`,
  password: `${config.password}`,
  version: `${config.version}`,
  auth: `${config.accounttype}`
})

bot.once('spawn', () => {
    console.log("Joining Hypixel and the island")
    setTimeout(() => {
        bot.chat("/play sb")
        setTimeout(() => {
            bot.chat("/island")
			setTimeout(() => {
				bot.chat("/play sb")
				setTimeout(() => {
					bot.chat("/island")
					setTimeout(() => {
						bot.chat("/island")
						setTimeout(() => {
							bot.chat("/island")
							setTimeout(() => {
								bot.chat("/island")
								setTimeout(() => {
									bot.chat("/island")
									setTimeout(() => {
										bot.chat("/island")
										setTimeout(() => {
											bot.chat("/island")
											setTimeout(() => {
												bot.chat("/island")
												setTimeout(() => {
													bot.chat("/island")
													setTimeout(() => {
														bot.chat("/island")
														setTimeout(() => {
															bot.chat("/island")
															setTimeout(() => {
																bot.chat("/island")
																setTimeout(() => {
																	bot.chat("/island")
																	setTimeout(() => {
																		bot.chat("/island")
																		setTimeout(() => {
																			bot.chat("/island")
																			setTimeout(() => {
																				bot.chat("/island")
																				setTimeout(() => {
																					bot.chat("/island")
																					setTimeout(() => {
																						bot.chat("/island")
																						setTimeout(() => {
																							bot.chat("/island")
																							setTimeout(() => {
																								bot.chat("/island")
																								setTimeout(() => {
																									bot.chat("/island")
																									setTimeout(() => {
																										bot.chat("/island")
																										setTimeout(() => {
																											bot.chat("/island")
																											setTimeout(() => {
																												bot.chat("/island")
																												setTimeout(() => {
																													bot.chat("/island")
																													setTimeout(() => {
																														bot.chat("/island")
																														setTimeout(() => {
																															bot.chat("/island")
																															setTimeout(() => {
																																bot.chat("/island")
																																setTimeout(() => {
																																	bot.chat("/island")
																																	setTimeout(() => {
																																		bot.chat("/island")
																																		setTimeout(() => {
																																			bot.chat("/island")
																																			setTimeout(() => {
																																				bot.chat("/island")
																																				setTimeout(() => {
																																					bot.chat("/island")
																																					setTimeout(() => {
																																						bot.chat("/island")
																																						setTimeout(() => {
																																							bot.chat("/island")
																																							setTimeout(() => {
																																								bot.chat("/island")
																																								setTimeout(() => {
																																									bot.chat("/island")
																																									setTimeout(() => {
																																										bot.chat("/island")
																																										setTimeout(() => {
																																											bot.chat("/island")
																																											setTimeout(() => {
																																												bot.chat("/island")
																																												setTimeout(() => {
																																													bot.chat("/island")
																																													setTimeout(() => {
																																														bot.chat("/island")
																																														setTimeout(() => {
																																															bot.chat("/island")
																																															setTimeout(() => {
																																																bot.chat("/island")
																																																setTimeout(() => {
																																																	bot.chat("/island")
																																																	setTimeout(() => {
																																																		bot.chat("/island")
																																																		setTimeout(() => {
																																																			bot.chat("/island")
																																																			setTimeout(() => {
																																																				bot.chat("/island")
																																																				setTimeout(() => {
																																																					bot.chat("/island")
																																																					setTimeout(() => {
																																																						bot.chat("/island")
																																																						setTimeout(() => {
																																																							bot.chat("/island")
																																																							setTimeout(() => {
																																																								bot.chat("/island")
																																																								setTimeout(() => {
																																																									bot.chat("/island")
																																																									setTimeout(() => {
																																																										bot.chat("/island")
																																																										setTimeout(() => {
																																																											bot.chat("/island")
																																																											setTimeout(() => {
																																																												bot.chat("/island")
																																																												setTimeout(() => {
																																																													bot.chat("/island")
																																																													setTimeout(() => {
																																																														bot.chat("/island")
																																																														setTimeout(() => {
																																																															bot.chat("/island")
																																																															setTimeout(() => {
																																																																bot.chat("/island")
																																																																setTimeout(() => {
																																																																	bot.chat("/island")
																																																																	setTimeout(() => {
																																																																		bot.chat("/island")
																																																																		setTimeout(() => {
																																																																			bot.chat("/island")
																																																																			setTimeout(() => {
																																																																				bot.chat("/island")
																																																																				setTimeout(() => {
																																																																					bot.chat("/island")
																																																																					setTimeout(() => {
																																																																						bot.chat("/island")
																																																																						setTimeout(() => {
																																																																							bot.chat("/island")
																																																																							setTimeout(() => {
																																																																								bot.chat("/island")
																																																																								setTimeout(() => {
																																																																									bot.chat("/island")
																																																																									setTimeout(() => {
																																																																										bot.chat("/island")
																																																																										setTimeout(() => {
																																																																											bot.chat("/island")
																																																																											setTimeout(() => {
																																																																												bot.chat("/island")
																																																																												setTimeout(() => {
																																																																													bot.chat("/island")
																																																																													setTimeout(() => {
																																																																														bot.chat("/island")
																																																																														setTimeout(() => {
																																																																															bot.chat("/island")
																																																																															setTimeout(() => {
																																																																																bot.chat("/island")
																																																																																setTimeout(() => {
																																																																																	bot.chat("/island")
																																																																																	setTimeout(() => {
																																																																																		bot.chat("/island")
																																																																																		setTimeout(() => {
																																																																																			bot.chat("/island")
																																																																																			setTimeout(() => {
																																																																																				bot.chat("/island")
																																																																																				setTimeout(() => {
																																																																																					bot.chat("/island")
																																																																																					setTimeout(() => {
																																																																																						bot.chat("/island")
																																																																																						setTimeout(() => {
																																																																																							bot.chat("/island")
																																																																																							setTimeout(() => {
																																																																																								bot.chat("/island")
																																																																																								setTimeout(() => {
																																																																																									bot.chat("/island")
																																																																																									setTimeout(() => {
																																																																																										bot.chat("/island")
																																																																																										setTimeout(() => {
																																																																																											bot.chat("/island")
																																																																																											setTimeout(() => {
																																																																																												bot.chat("/island")
																																																																																												setTimeout(() => {
																																																																																													bot.chat("/island")
																																																																																													setTimeout(() => {
																																																																																														bot.chat("/island")
																																																																																														setTimeout(() => {
																																																																																															bot.chat("/island")
																																																																																															setTimeout(() => {
																																																																																																bot.chat("/island")
																																																																																																setTimeout(() => {
																																																																																																	bot.chat("/island")
																																																																																																	setTimeout(() => {
																																																																																																		bot.chat("/island")
																																																																																																		setTimeout(() => {
																																																																																																			bot.chat("/island")
																																																																																																			setTimeout(() => {
																																																																																																				bot.chat("/island")
																																																																																																				setTimeout(() => {
																																																																																																					bot.chat("/island")
																																																																																																					setTimeout(() => {
																																																																																																						bot.chat("/island")
																																																																																																						setTimeout(() => {
																																																																																																							bot.chat("/island")
																																																																																																							setTimeout(() => {
																																																																																																								bot.chat("/island")
																																																																																																								setTimeout(() => {
																																																																																																									bot.chat("/island")
																																																																																																									setTimeout(() => {
																																																																																																										bot.chat("/island")
																																																																																																										setTimeout(() => {
																																																																																																											bot.chat("/island")
																																																																																																											setTimeout(() => {
																																																																																																												bot.chat("/island")
																																																																																																												setTimeout(() => {
																																																																																																													bot.chat("/island")
																																																																																																													setTimeout(() => {
																																																																																																														bot.chat("/island")
																																																																																																														setTimeout(() => {
																																																																																																															bot.chat("/island")
																																																																																																															setTimeout(() => {
																																																																																																																bot.chat("/island")
																																																																																																																setTimeout(() => {
																																																																																																																	bot.chat("/island")
																																																																																																																	setTimeout(() => {
																																																																																																																		bot.chat("/island")
																																																																																																																		setTimeout(() => {
																																																																																																																			bot.chat("/island")
																																																																																																																			setTimeout(() => {
																																																																																																																				bot.chat("/island")
																																																																																																																				setTimeout(() => {
																																																																																																																					bot.chat("/island")
																																																																																																																					setTimeout(() => {
																																																																																																																						bot.chat("/island")
																																																																																																																						setTimeout(() => {
																																																																																																																							bot.chat("/island")
																																																																																																																							setTimeout(() => {
																																																																																																																								bot.chat("/island")
																																																																																																																								setTimeout(() => {
																																																																																																																									bot.chat("/island")
																																																																																																																									setTimeout(() => {
																																																																																																																										bot.chat("/island")
																																																																																																																										setTimeout(() => {
																																																																																																																											bot.chat("/island")
																																																																																																																											setTimeout(() => {
																																																																																																																												bot.chat("/island")
																																																																																																																												setTimeout(() => {
																																																																																																																													bot.chat("/island")
																																																																																																																													setTimeout(() => {
																																																																																																																														bot.chat("/island")
																																																																																																																														setTimeout(() => {
																																																																																																																															bot.chat("/island")
																																																																																																																															setTimeout(() => {
																																																																																																																																bot.chat("/island")
																																																																																																																																setTimeout(() => {
																																																																																																																																	bot.chat("/island")
																																																																																																																																	setTimeout(() => {
																																																																																																																																		bot.chat("/island")
																																																																																																																																		setTimeout(() => {
																																																																																																																																			bot.chat("/island")
																																																																																																																																			setTimeout(() => {
																																																																																																																																				bot.chat("/island")
																																																																																																																																				setTimeout(() => {
																																																																																																																																					bot.chat("/island")
																																																																																																																																					setTimeout(() => {
																																																																																																																																						bot.chat("/island")
																																																																																																																																						setTimeout(() => {
																																																																																																																																							bot.chat("/island")
																																																																																																																																							setTimeout(() => {
																																																																																																																																								bot.chat("/island")
																																																																																																																																								setTimeout(() => {
																																																																																																																																									bot.chat("/island")
																																																																																																																																									setTimeout(() => {
																																																																																																																																										bot.chat("/island")
																																																																																																																																										setTimeout(() => {
																																																																																																																																											bot.chat("/island")
																																																																																																																																											setTimeout(() => {
																																																																																																																																												bot.chat("/island")
																																																																																																																																												setTimeout(() => {
																																																																																																																																													bot.chat("/island")
																																																																																																																																													setTimeout(() => {
																																																																																																																																														bot.chat("/island")
																																																																																																																																														setTimeout(() => {
																																																																																																																																															bot.chat("/island")
																																																																																																																																															setTimeout(() => {
																																																																																																																																																bot.chat("/island")
																																																																																																																																																setTimeout(() => {
																																																																																																																																																	bot.chat("/island")
																																																																																																																																																	setTimeout(() => {
																																																																																																																																																		bot.chat("/island")
																																																																																																																																																		setTimeout(() => {
																																																																																																																																																			bot.chat("/island")
																																																																																																																																																			setTimeout(() => {
																																																																																																																																																				bot.chat("/island")
																																																																																																																																																				setTimeout(() => {
																																																																																																																																																					bot.chat("/island")
																																																																																																																																																					setTimeout(() => {
																																																																																																																																																						bot.chat("/island")
																																																																																																																																																						setTimeout(() => {
																																																																																																																																																							bot.chat("/island")
																																																																																																																																																							setTimeout(() => {
																																																																																																																																																								bot.chat("/island")
																																																																																																																																																								setTimeout(() => {
																																																																																																																																																									bot.chat("/island")
																																																																																																																																																									setTimeout(() => {
																																																																																																																																																										bot.chat("/island")
																																																																																																																																																										setTimeout(() => {
																																																																																																																																																											bot.chat("/island")
																																																																																																																																																											setTimeout(() => {
																																																																																																																																																												bot.chat("/island")
																																																																																																																																																												setTimeout(() => {
																																																																																																																																																													bot.chat("/island")
																																																																																																																																																													setTimeout(() => {
																																																																																																																																																														bot.chat("/island")
																																																																																																																																																														setTimeout(() => {
																																																																																																																																																															bot.chat("/island")
																																																																																																																																																															setTimeout(() => {
																																																																																																																																																																bot.chat("/island")
																																																																																																																																																																setTimeout(() => {
																																																																																																																																																																	bot.chat("/island")
																																																																																																																																																																	setTimeout(() => {
																																																																																																																																																																		bot.chat("/island")
																																																																																																																																																																		setTimeout(() => {
																																																																																																																																																																			bot.chat("/island")
																																																																																																																																																																			setTimeout(() => {
																																																																																																																																																																				bot.chat("/island")
																																																																																																																																																																				setTimeout(() => {
																																																																																																																																																																					bot.chat("/island")
																																																																																																																																																																					setTimeout(() => {
																																																																																																																																																																						bot.chat("/island")
																																																																																																																																																																						setTimeout(() => {
																																																																																																																																																																							bot.chat("/island")
																																																																																																																																																																							setTimeout(() => {
																																																																																																																																																																								bot.chat("/island")
																																																																																																																																																																								setTimeout(() => {
																																																																																																																																																																									bot.chat("/island")
																																																																																																																																																																									setTimeout(() => {
																																																																																																																																																																										bot.chat("/island")
																																																																																																																																																																										setTimeout(() => {
																																																																																																																																																																											bot.chat("/island")
																																																																																																																																																																											setTimeout(() => {
																																																																																																																																																																												bot.chat("/island")
																																																																																																																																																																												setTimeout(() => {
																																																																																																																																																																													bot.chat("/island")
																																																																																																																																																																													setTimeout(() => {
																																																																																																																																																																														bot.chat("/island")
																																																																																																																																																																														setTimeout(() => {
																																																																																																																																																																															bot.chat("/island")
																																																																																																																																																																															setTimeout(() => {
																																																																																																																																																																																bot.chat("/island")
																																																																																																																																																																																setTimeout(() => {
																																																																																																																																																																																	bot.chat("/island")
																																																																																																																																																																																	setTimeout(() => {
																																																																																																																																																																																		bot.chat("/island")
																																																																																																																																																																																		setTimeout(() => {
																																																																																																																																																																																			bot.chat("/island")
																																																																																																																																																																																			setTimeout(() => {
																																																																																																																																																																																				bot.chat("/island")
																																																																																																																																																																																				setTimeout(() => {
																																																																																																																																																																																					bot.chat("/island")
																																																																																																																																																																																					setTimeout(() => {
																																																																																																																																																																																						bot.chat("/island")
																																																																																																																																																																																						setTimeout(() => {
																																																																																																																																																																																							bot.chat("/island")
																																																																																																																																																																																							setTimeout(() => {
																																																																																																																																																																																								bot.chat("/island")
																																																																																																																																																																																								setTimeout(() => {
																																																																																																																																																																																									bot.chat("/island")
																																																																																																																																																																																									setTimeout(() => {
																																																																																																																																																																																										bot.chat("/island")
																																																																																																																																																																																										setTimeout(() => {
																																																																																																																																																																																											bot.chat("/island")
																																																																																																																																																																																											setTimeout(() => {
																																																																																																																																																																																												bot.chat("/island")
																																																																																																																																																																																												setTimeout(() => {
																																																																																																																																																																																													bot.chat("/island")
																																																																																																																																																																																													setTimeout(() => {
																																																																																																																																																																																														bot.chat("/island")
																																																																																																																																																																																														setTimeout(() => {
																																																																																																																																																																																															bot.chat("/island")
																																																																																																																																																																																															setTimeout(() => {
																																																																																																																																																																																																bot.chat("/island")
																																																																																																																																																																																																setTimeout(() => {
																																																																																																																																																																																																	bot.chat("/island")
																																																																																																																																																																																																	setTimeout(() => {
																																																																																																																																																																																																		bot.chat("/island")
																																																																																																																																																																																																		setTimeout(() => {
																																																																																																																																																																																																			bot.chat("/island")
																																																																																																																																																																																																			setTimeout(() => {
																																																																																																																																																																																																				bot.chat("/island")
																																																																																																																																																																																																				setTimeout(() => {
																																																																																																																																																																																																					bot.chat("/island")
																																																																																																																																																																																																					setTimeout(() => {
																																																																																																																																																																																																						bot.chat("/island")
																																																																																																																																																																																																						setTimeout(() => {
																																																																																																																																																																																																							bot.chat("/island")
																																																																																																																																																																																																							setTimeout(() => {
																																																																																																																																																																																																								bot.chat("/island")
																																																																																																																																																																																																								setTimeout(() => {
																																																																																																																																																																																																									bot.chat("/island")
																																																																																																																																																																																																									setTimeout(() => {
																																																																																																																																																																																																										bot.chat("/island")
																																																																																																																																																																																																										setTimeout(() => {
																																																																																																																																																																																																											bot.chat("/island")
																																																																																																																																																																																																											setTimeout(() => {
																																																																																																																																																																																																												bot.chat("/island")
																																																																																																																																																																																																												setTimeout(() => {
																																																																																																																																																																																																													bot.chat("/island")
																																																																																																																																																																																																													setTimeout(() => {
																																																																																																																																																																																																														bot.chat("/island")
																																																																																																																																																																																																														setTimeout(() => {
																																																																																																																																																																																																															bot.chat("/island")
																																																																																																																																																																																																															setTimeout(() => {
																																																																																																																																																																																																																bot.chat("/island")
																																																																																																																																																																																																																setTimeout(() => {
																																																																																																																																																																																																																	bot.chat("/island")
																																																																																																																																																																																																																	setTimeout(() => {
																																																																																																																																																																																																																		bot.chat("/island")
																																																																																																																																																																																																																		setTimeout(() => {
																																																																																																																																																																																																																			bot.chat("/island")
																																																																																																																																																																																																																			setTimeout(() => {
																																																																																																																																																																																																																				bot.chat("/island")
																																																																																																																																																																																																																				setTimeout(() => {
																																																																																																																																																																																																																					bot.chat("/island")
																																																																																																																																																																																																																					setTimeout(() => {
																																																																																																																																																																																																																						bot.chat("/island")
																																																																																																																																																																																																																						setTimeout(() => {
																																																																																																																																																																																																																							bot.chat("/island")
																																																																																																																																																																																																																							setTimeout(() => {
																																																																																																																																																																																																																								bot.chat("/island")
																																																																																																																																																																																																																								setTimeout(() => {
																																																																																																																																																																																																																									bot.chat("/island")
																																																																																																																																																																																																																									setTimeout(() => {
																																																																																																																																																																																																																										bot.chat("/island")
																																																																																																																																																																																																																										setTimeout(() => {
																																																																																																																																																																																																																											bot.chat("/island")
																																																																																																																																																																																																																											setTimeout(() => {
																																																																																																																																																																																																																												bot.chat("/island")
																																																																																																																																																																																																																												setTimeout(() => {
																																																																																																																																																																																																																													bot.chat("/island")
																																																																																																																																																																																																																													setTimeout(() => {
																																																																																																																																																																																																																														bot.chat("/island")
																																																																																																																																																																																																																													}, 60000)
																																																																																																																																																																																																																												}, 60000)
																																																																																																																																																																																																																											}, 60000)
																																																																																																																																																																																																																										}, 60000)
																																																																																																																																																																																																																									}, 60000)
																																																																																																																																																																																																																								}, 60000)
																																																																																																																																																																																																																							}, 60000)
																																																																																																																																																																																																																						}, 60000)
																																																																																																																																																																																																																					}, 60000)
																																																																																																																																																																																																																				}, 60000)
																																																																																																																																																																																																																			}, 60000)
																																																																																																																																																																																																																		}, 60000)
																																																																																																																																																																																																																	}, 60000)
																																																																																																																																																																																																																}, 60000)
																																																																																																																																																																																																															}, 60000)
																																																																																																																																																																																																														}, 60000)
																																																																																																																																																																																																													}, 60000)
																																																																																																																																																																																																												}, 60000)
																																																																																																																																																																																																											}, 60000)
																																																																																																																																																																																																										}, 60000)
																																																																																																																																																																																																									}, 60000)
																																																																																																																																																																																																								}, 60000)
																																																																																																																																																																																																							}, 60000)
																																																																																																																																																																																																						}, 60000)
																																																																																																																																																																																																					}, 60000)
																																																																																																																																																																																																				}, 60000)
																																																																																																																																																																																																			}, 60000)
																																																																																																																																																																																																		}, 60000)
																																																																																																																																																																																																	}, 60000)
																																																																																																																																																																																																}, 60000)
																																																																																																																																																																																															}, 60000)
																																																																																																																																																																																														}, 60000)
																																																																																																																																																																																													}, 60000)
																																																																																																																																																																																												}, 60000)
																																																																																																																																																																																											}, 60000)
																																																																																																																																																																																										}, 60000)
																																																																																																																																																																																									}, 60000)
																																																																																																																																																																																								}, 60000)
																																																																																																																																																																																							}, 60000)
																																																																																																																																																																																						}, 60000)
																																																																																																																																																																																					}, 60000)
																																																																																																																																																																																				}, 60000)
																																																																																																																																																																																			}, 60000)
																																																																																																																																																																																		}, 60000)
																																																																																																																																																																																	}, 60000)
																																																																																																																																																																																}, 60000)
																																																																																																																																																																															}, 60000)
																																																																																																																																																																														}, 60000)
																																																																																																																																																																													}, 60000)
																																																																																																																																																																												}, 60000)
																																																																																																																																																																											}, 60000)
																																																																																																																																																																										}, 60000)
																																																																																																																																																																									}, 60000)
																																																																																																																																																																								}, 60000)
																																																																																																																																																																							}, 60000)
																																																																																																																																																																						}, 60000)
																																																																																																																																																																					}, 60000)
																																																																																																																																																																				}, 60000)
																																																																																																																																																																			}, 60000)
																																																																																																																																																																		}, 60000)
																																																																																																																																																																	}, 60000)
																																																																																																																																																																}, 60000)
																																																																																																																																																															}, 60000)
																																																																																																																																																														}, 60000)
																																																																																																																																																													}, 60000)
																																																																																																																																																												}, 60000)
																																																																																																																																																											}, 60000)
																																																																																																																																																										}, 60000)
																																																																																																																																																									}, 60000)
																																																																																																																																																								}, 60000)
																																																																																																																																																							}, 60000)
																																																																																																																																																						}, 60000)
																																																																																																																																																					}, 60000)
																																																																																																																																																				}, 60000)
																																																																																																																																																			}, 60000)
																																																																																																																																																		}, 60000)
																																																																																																																																																	}, 60000)
																																																																																																																																																}, 60000)
																																																																																																																																															}, 60000)
																																																																																																																																														}, 60000)
																																																																																																																																													}, 60000)
																																																																																																																																												}, 60000)
																																																																																																																																											}, 60000)
																																																																																																																																										}, 60000)
																																																																																																																																									}, 60000)
																																																																																																																																								}, 60000)
																																																																																																																																							}, 60000)
																																																																																																																																						}, 60000)
																																																																																																																																					}, 60000)
																																																																																																																																				}, 60000)
																																																																																																																																			}, 60000)
																																																																																																																																		}, 60000)
																																																																																																																																	}, 60000)
																																																																																																																																}, 60000)
																																																																																																																															}, 60000)
																																																																																																																														}, 60000)
																																																																																																																													}, 60000)
																																																																																																																												}, 60000)
																																																																																																																											}, 60000)
																																																																																																																										}, 60000)
																																																																																																																									}, 60000)
																																																																																																																								}, 60000)
																																																																																																																							}, 60000)
																																																																																																																						}, 60000)
																																																																																																																					}, 60000)
																																																																																																																				}, 60000)
																																																																																																																			}, 60000)
																																																																																																																		}, 60000)
																																																																																																																	}, 60000)
																																																																																																																}, 60000)
																																																																																																															}, 60000)
																																																																																																														}, 60000)
																																																																																																													}, 60000)
																																																																																																												}, 60000)
																																																																																																											}, 60000)
																																																																																																										}, 60000)
																																																																																																									}, 60000)
																																																																																																								}, 60000)
																																																																																																							}, 60000)
																																																																																																						}, 60000)
																																																																																																					}, 60000)
																																																																																																				}, 60000)
																																																																																																			}, 60000)
																																																																																																		}, 60000)
																																																																																																	}, 60000)
																																																																																																}, 60000)
																																																																																															}, 60000)
																																																																																														}, 60000)
																																																																																													}, 60000)
																																																																																												}, 60000)
																																																																																											}, 60000)
																																																																																										}, 60000)
																																																																																									}, 60000)
																																																																																								}, 60000)
																																																																																							}, 60000)
																																																																																						}, 60000)
																																																																																					}, 60000)
																																																																																				}, 60000)
																																																																																			}, 60000)
																																																																																		}, 60000)
																																																																																	}, 60000)
																																																																																}, 60000)
																																																																															}, 60000)
																																																																														}, 60000)
																																																																													}, 60000)
																																																																												}, 60000)
																																																																											}, 60000)
																																																																										}, 60000)
																																																																									}, 60000)
																																																																								}, 60000)
																																																																							}, 60000)
																																																																						}, 60000)
																																																																					}, 60000)
																																																																				}, 60000)
																																																																			}, 60000)
																																																																		}, 60000)
																																																																	}, 60000)
																																																																}, 60000)
																																																															}, 60000)
																																																														}, 60000)
																																																													}, 60000)
																																																												}, 60000)
																																																											}, 60000)
																																																										}, 60000)
																																																									}, 60000)
																																																								}, 60000)
																																																							}, 60000)
																																																						}, 60000)
																																																					}, 60000)
																																																				}, 60000)
																																																			}, 60000)
																																																		}, 60000)
																																																	}, 60000)
																																																}, 60000)
																																															}, 60000)
																																														}, 60000)
																																													}, 60000)
																																												}, 60000)
																																											}, 60000)
																																										}, 60000)
																																									}, 60000)
																																								}, 60000)
																																							}, 60000)
																																						}, 60000)
																																					}, 60000)
																																				}, 60000)
																																			}, 60000)
																																		}, 60000)
																																	}, 60000)
																																}, 60000)
																															}, 60000)
																														}, 60000)
																													}, 60000)
																												}, 60000)
																											}, 60000)
																										}, 60000)
																									}, 60000)
																								}, 60000)
																							}, 60000)
																						}, 60000)
																					}, 60000)
																				}, 60000)
																			}, 60000)
																		}, 60000)
																	}, 60000)
																}, 60000)
															}, 60000)
														}, 60000)
													}, 60000)
												}, 60000)
											}, 60000)
										}, 60000)
									}, 60000)
								}, 60000)
							}, 60000)
						}, 60000)
					}, 60000)
				}, 1000)
			}, 1000)
        }, 6000)
    }, 6000)
})

bot.on("message", message => {
	if (sending == true) {
		chatData.push(`${message}`)
	}
})

client.on("message", async msg => {
    let args = msg.content.split(" ").slice(1)

    if(msg.content.startsWith("!runcmd")) {
        let toSend = args.join(" ")
        if(!toSend) return msg.reply("No args")

        bot.chat(toSend)
        sending = true
        msg.channel.send(`${msg.author.tag} just sent ${toSend}`)

        setTimeout(() => {
            sending = false
            msg.channel.send(chatData.join("\n"))
            chatData = []
        }, 750)
    }
})

client.login(token)