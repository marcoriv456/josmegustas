vim.cmd("colorscheme onedark_vivid")

RunOptions = {
  test_file = function(ctx)
    ctx.run({ cmd = "npm test " .. ctx.file, cwd = ctx.root, interactive = true })
  end,
  serve = function(ctx)
    ctx.run({ cmd = "ng serve", run_background = true })
  end,
}
