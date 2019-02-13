/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Slider


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menu = $('.menu');
	var burger = $('.hamburger');
	var menuActive = false;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		if(window.innerWidth > 1280)
		{
			if(menuActive)
			{
				closeMenu();
			}
		}
		setTimeout(function()
		{
			jQuery(".main_content_scroll").mCustomScrollbar("update");
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initSlider();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 91)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Slider

	*/

	function initSlider()
	{
		if($('.test_slider').length)
		{
			var slider = $('.test_slider');
			slider.owlCarousel(
			{
				items: 3,
				autoplay:false,
				loop:true,
				nav:false,
				dots:true,
				smartSpeed:600,
				margin:30,
				responsive:
				{
					0:{items:1},
					900:{items:2},
					1199:{items:1},
					1440:{items:2},
					1680:{items:3}
				}
			});
		}
	}

});