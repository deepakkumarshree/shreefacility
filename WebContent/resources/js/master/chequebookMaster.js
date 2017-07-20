$(document)
		.ready(
				function() {

					var url = jQuery(location).attr('href');
					var status = url.split("?status=")[1];
					if (status != 'undefined') {
						if (status == '0') {
							$('#errorbar').append("Unable to Save Data.");
							$("#errorbardiv").removeClass("hide").addClass("show");
						} else if (Number(status) > 0) {
							$('#infobar').append("Data Saved Successfully.");
							$("#infobardiv").removeClass("hide").addClass("show");
						}
						
						$("input").keyup(function() {
							$("#infobar").text("");
							$("#infobardiv").removeClass("show").addClass("hide");
							$("#errorbar").text("");
							$("#errorbardiv").removeClass("show").addClass("hide");
						});
					}

					$("#chequebookmaster-form").validate(
							{
								// Specify the validation rules
								rules : {
									bankName : {
										required : true,
									},
									chequeBookFrom : {
										required : true,
										number : true,
									},
									chequeBookTo : {
										required : true,
										number : true,
									},
									chequeVoidFrom : {
										required : true,
										number : true,
									},
									chequeVoidTo : {
										required : true,
										number : true,
									},
									chequeDeleteFrom : {
										required : true,
										number : true,
									},
									chequeDeleteTo : {
										required : true,
										number : true,
									},

								},
								// Specify the validation error messages
								messages : {

								},
								highlight : function(label) {
									jQuery(label).closest('.form-group')
											.addClass('error');
									jQuery(label).closest('.form-group')
											.removeClass('success');
								},
								success : function(label) {
									label.addClass('valid').closest(
											'.form-group').addClass('success');
									jQuery(label).closest('.form-group')
											.removeClass('error');
								},
								submitHandler : function(form) {

									form.submit();
								}
							});

					// chequeBook start
					$("#chequeBookTo")
							.blur(
									function() {

										if ($("#chequeBookTo").val() != "") {

											if (($("#chequeBookTo").val().length) != 6) {

												alert("Cheque number Should be 6 digits.");
												$("#chequeBookTo").val("");
												$("#chequeBookTo").focus();
											}
										}
										if (($("#chequeBookTo").val().length) == 6) {
											var chequeTo = Number($(
													"#chequeBookTo").val());
											var chequeFrom = Number($(
													"#chequeBookFrom").val());

											if (chequeFrom > chequeTo) {

												alert("Invalid sequence of cheque number.");
												$("#chequeBookTo").val("");
												$("#total").val("");
												$("#chequeBookTo").focus();
											}
										}
										var formData = {
											"chequeBookTo" : jQuery(
													"#chequeBookTo").val(),
											"chequeBookFrom" : jQuery(
													"#chequeBookFrom").val(),
											"bankcode" : jQuery("#bankcode")
													.val(),
										};
										jQuery
												.ajax({
													type : "GET",
													url : 'validateChequeBookNo.htm',
													data : formData,
													success : function(result) {
														if (result > 0) {
															alert("Cheque Number Series already exist.");
															$("#chequeBookTo")
																	.val('');
															$("#chequeBookFrom")
																	.val('');
															$("#chequeBookFrom")
																	.focus();
															$("#total").val("");
														} else {
															form.submit();
														}
													}
												});

									});

					$("#chequeBookFrom").blur(function() {

						if ($("#chequeBookFrom").val() != "") {

							if (($("#chequeBookFrom").val().length) != 6) {

								alert("Cheque number Should be 6 digits.");
								$("#chequeBookFrom").val("");
								$("#chequeBookFrom").focus();
							}
						}
						if ($("#chequeBookTo").val() != "") {
							$("#chequeBookTo").val("");
							$("#chequeBookFrom").focus();
							$("#total").val("");
						}

					});
					// end of chequeBook

					// start voidcheque
					$("#chequeVoidTo")
							.blur(
									function() {

										if ($("#chequeVoidTo").val() != "") {

											if (($("#chequeVoidTo").val().length) != 6) {

												alert("Cheque number Should be 6 digits.");
												$("#chequeVoidTo").val("");
												$("#chequeVoidTo").focus();
											}
										}
										if (($("#chequeVoidTo").val().length) == 6) {
											var chequeTo = Number($(
													"#chequeVoidTo").val());
											var chequeFrom = Number($(
													"#chequeVoidFrom").val());

											if (chequeFrom > chequeTo) {

												alert("Invalid sequence of cheque number.");
												$("#chequeVoidTo").val("");
												$("#voidtotal").val("");
												$("#chequeVoidTo").focus();

											}
										}
										var formData = {
											"chequeBookTo" : jQuery(
													"#chequeVoidTo").val(),
											"chequeBookFrom" : jQuery(
													"#chequeVoidFrom").val(),
											"bankcode1" : jQuery("#bankcode1")
													.val(),

										};
										jQuery
												.ajax({
													type : "GET",
													url : 'validateVoidCheque.htm',
													data : formData,
													success : function(result) {
														if (result > 0) {
															var formData = {
																"chequeVoidFrom" : jQuery(
																		"#chequeVoidFrom")
																		.val(),
																"chequeVoidTo" : jQuery(
																		"#chequeVoidTo")
																		.val(),
																"bankcode1" : jQuery(
																		"#bankcode1")
																		.val(),

															};
															jQuery
																	.ajax({
																		type : "GET",
																		url : 'validateChequeVoid.htm',
																		data : formData,
																		success : function(
																				result) {
																			if (result > 0) {
																				alert("Cheque Number Series Is Already Void.");
																				$(
																						"#chequeVoidTo")
																						.val(
																								'');
																				$(
																						"#chequeVoidFrom")
																						.val(
																								'');
																				$(
																						'#chequeVoidFrom')
																						.focus();
																				$(
																						"#voidtotal")
																						.val(
																								"");
																			} else {
																				form
																						.submit();
																			}
																		}
																	});
														} else {
															if ($(
																	"#chequeVoidFrom")
																	.val() != "") {
																alert("Cheque Number Series doesnt exist.");
																$(
																		"#chequeVoidTo")
																		.val('');
																$(
																		"#chequeVoidFrom")
																		.val('');
																$(
																		'#chequeVoidFrom')
																		.focus();
																$("#voidtotal")
																		.val("");
															}
														}
													}
												});

									});

					$("#chequeVoidFrom").blur(function() {

						if ($("#chequeVoidFrom").val() != "") {

							if (($("#chequeVoidFrom").val().length) != 6) {

								alert("Cheque number Should be 6 digits.");
								$("#chequeVoidFrom").val("");
								$("#chequeVoidFrom").focus();
							}
						}
						if ($("#chequeVoidTo").val() != "") {
							$("#chequeVoidTo").val("");
							$("#chequeVoidFrom").focus();
							$("#voidtotal").val("");
						}

					});
					// end of voidcheque

					// start of deletecheque
					$("#chequeDeleteTo")
							.blur(
									function() {

										if ($("#chequeDeleteTo").val() != "") {

											if (($("#chequeDeleteTo").val().length) != 6) {

												alert("Cheque number Should be 6 digits.");
												$("#chequeDeleteTo").val("");
												$("#chequeDeleteTo").focus();

											}
										}
										if (($("#chequeDeleteTo").val().length) == 6) {
											var chequeTo = Number($(
													"#chequeDeleteTo").val());
											var chequeFrom = Number($(
													"#chequeDeleteFrom").val());

											if (chequeFrom > chequeTo) {

												alert("Invalid sequence of cheque number.");
												$("#chequeDeleteTo").val("");
												$("#deletetotal").val("");
												$("#chequeDeleteTo").focus();
											}
										}
										var formData = {
											"chequeDeleteFrom" : jQuery(
													"#chequeDeleteFrom").val(),
											"chequeDeleteTo" : jQuery(
													"#chequeDeleteTo").val(),
											"bankcode2" : jQuery("#bankcode2")
													.val(),

										};
										jQuery
												.ajax({
													type : "GET",
													url : 'validateChequeDelete.htm',
													data : formData,
													success : function(result) {

														if (result > 0) {
															alert("Cheque Number Series doesn't exist.");
															$("#chequeDeleteTo")
																	.val('');
															$(
																	"#chequeDeleteFrom")
																	.val('');
															$(
																	'#chequeDeleteFrom')
																	.focus();
															$("#deletetotal")
																	.val("");

														} else {
															form.submit();

														}
													}
												});
									});

					$("#chequeDeleteFrom").blur(function() {

						if ($("#chequeDeleteFrom").val() != "") {

							if (($("#chequeDeleteFrom").val().length) != 6) {

								alert("Cheque number Should be 6 digits.");
								$("#chequeDeleteFrom").val("");
								$("#chequeDeleteFrom").focus();
							}
						}
						if ($("#chequeDeleteTo").val() != "") {
							$("#chequeDeleteTo").val("");
							$("#chequeDeleteFrom").focus();
							$("#deletetotal").val("");
						}

					});
					// end of deletecheque

					// addition of chequefrom to chequeno
					$("#chequeBookTo")
							.keyup(
									function() {

										if ($("#chequeBookTo").val() != ""
												&& $("#chequeBookFrom").val() != "") {
											var chequeFrom = Number($(
													"#chequeBookFrom").val());
											var chequeTo = Number($(
													"#chequeBookTo").val());

											var tatalsum = (chequeTo - chequeFrom) + 1;
											$("#total").val(tatalsum);
										}
									});

					$("#chequeVoidTo")
							.keyup(
									function() {

										if ($("#chequeVoidTo").val() != ""
												&& $("#chequeVoidFrom").val() != "") {
											var chequeFrom = Number($(
													"#chequeVoidFrom").val());
											var chequeTo = Number($(
													"#chequeVoidTo").val());

											var tatalsum = (chequeTo - chequeFrom) + 1;
											$("#voidtotal").val(tatalsum);
										}
									});

					$("#chequeDeleteTo").keyup(
							function() {

								if ($("#chequeDeleteTo").val() != ""
										&& $("#chequeDeleteFrom").val() != "") {
									var chequeFrom = Number($(
											"#chequeDeleteFrom").val());
									var chequeTo = Number($("#chequeDeleteTo")
											.val());

									var tatalsum = (chequeTo - chequeFrom) + 1;
									$("#deletetotal").val(tatalsum);
								}
							});

					// autocomplete first bank
					$("#bankName").autocomplete({
						autoFocus : true,
						source : function(request, response) {
							var formdata = {
								'searchKeyword' : request.term.trim(),
							};
							$.ajax({
								type : "POST",
								url : "getBankName.htm",
								data : formdata,
								success : function(data) {
									response($.parseJSON(data));
								},
								error : function(data) {
									alert(data.status + ' ' + data.statusText);

								}
							});
						},
						select : function(event, ui) {
							$("#bankName").val(ui.item.acname);
							$("#bankcode").val(ui.item.accode);
							return false;
						},
						change : function(event, ui) {
							if (!ui.item) {
								alert('Please select valid  Bank Name');
								this.value = '';
								this.focus();
							}
						}

					}).autocomplete("instance")._renderItem = function(ul, item) {
						return $("<li>").append("<a>" + item.acname + "</a>")
								.appendTo(ul);
					};

					//autocomplete second bank
					$("#bankName1").autocomplete({
						autoFocus : true,
						source : function(request, response) {
							var formdata = {
								'searchKeyword' : request.term.trim(),
							};
							$.ajax({
								type : "POST",
								url : "getBankName.htm",
								data : formdata,
								success : function(data) {
									response($.parseJSON(data));
								},
								error : function(data) {
									alert(data.status + ' ' + data.statusText);

								}
							});
						},
						select : function(event, ui) {
							$("#bankName1").val(ui.item.acname);
							$("#bankcode1").val(ui.item.accode);

							return false;
						},
						change : function(event, ui) {
							if (!ui.item) {
								alert('Please select valid  Bank Name');
								this.value = '';
								this.focus();
							}
						}

					}).autocomplete("instance")._renderItem = function(ul, item) {
						return $("<li>").append("<a>" + item.acname + "</a>")
								.appendTo(ul);
					};

					//autocomplete third bank
					$("#bankName2").autocomplete({
						autoFocus : true,
						source : function(request, response) {
							var formdata = {
								'searchKeyword' : request.term.trim(),
							};
							$.ajax({
								type : "POST",
								url : "getBankName.htm",
								data : formdata,
								success : function(data) {
									response($.parseJSON(data));
								},
								error : function(data) {
									alert(data.status + ' ' + data.statusText);

								}
							});
						},
						select : function(event, ui) {
							$("#bankName2").val(ui.item.acname);
							$("#bankcode2").val(ui.item.accode);

							return false;
						},
						change : function(event, ui) {
							if (!ui.item) {
								alert('Please select valid  Bank Name');
								this.value = '';
								this.focus();
							}
						}

					}).autocomplete("instance")._renderItem = function(ul, item) {
						return $("<li>").append("<a>" + item.acname + "</a>")
								.appendTo(ul);
					};

					//save buttons

					$("#savechequebook").click(
							function() {

								$("#chequeFrom")
										.val($("#chequeBookFrom").val());
								$("#chequeTo").val($("#chequeBookTo").val());

								$("#chequebookmaster-form").prop("action",
										"saveChequeBook.htm");
								$("#chequebookmaster-form").submit();

							});

					$("#saveVoidCheque").click(
							function() {

								$("#chequeFrom")
										.val($("#chequeVoidFrom").val());
								$("#chequeTo").val($("#chequeVoidTo").val());

								$("#chequebookmaster-form").prop("action",
										"saveVoidCheque.htm");
								$("#chequebookmaster-form").submit();

							});

					$("#saveDeleteCheque").click(
							function() {

								$("#chequeFrom").val(
										$("#chequeDeleteFrom").val());
								$("#chequeTo").val($("#chequeDeleteTo").val());

								$("#chequebookmaster-form").prop("action",
										"saveDeleteCheque.htm");
								$("#chequebookmaster-form").submit();

							});

				});
