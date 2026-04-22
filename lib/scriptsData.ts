export const scripts = [
  {
    name: "Simple Sprint Script",
    category: "Movement",
    desc: "Adds sprinting with Shift key",
    code: `-- sprint script
local UIS = game:GetService("UserInputService")
local player = game.Players.LocalPlayer
local char = player.Character or player.CharacterAdded:Wait()

UIS.InputBegan:Connect(function(input)
  if input.KeyCode == Enum.KeyCode.LeftShift then
    char.Humanoid.WalkSpeed = 24
  end
end)

UIS.InputEnded:Connect(function(input)
  if input.KeyCode == Enum.KeyCode.LeftShift then
    char.Humanoid.WalkSpeed = 16
  end
end)`
  },
  {
    name: "UI Toggle Script",
    category: "UI",
    desc: "Opens/closes a GUI",
    code: `-- ui toggle
local gui = script.Parent

script.Parent.Button.MouseButton1Click:Connect(function()
  gui.Enabled = not gui.Enabled
end)`
  }
];